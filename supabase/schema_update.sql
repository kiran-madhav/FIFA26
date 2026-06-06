-- Supabase Schema Update for Prediction Submission Flow

-- 1. Ensure poll_votes exists (in case it was missed previously)
CREATE TABLE IF NOT EXISTS public.poll_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  poll_id BIGINT REFERENCES public.polls(id) ON DELETE CASCADE,
  option_id BIGINT REFERENCES public.poll_options(id) ON DELETE CASCADE,
  fingerprint TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(poll_id, fingerprint)
);

-- 2. Create Submissions Table
CREATE TABLE IF NOT EXISTS public.poll_submissions (
  fingerprint TEXT PRIMARY KEY,
  champion_id BIGINT,
  polls_completed INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Bulk Submission RPC
CREATE OR REPLACE FUNCTION submit_predictions(
  p_fingerprint TEXT,
  p_champion_id BIGINT,
  p_poll_votes JSONB -- Format: [{"poll_id": 1, "option_id": 101}, ...]
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_exists BOOLEAN;
  v_vote record;
  v_participant_count INT;
  v_created_at TIMESTAMPTZ;
BEGIN
  -- Validate duplicate submission inside RPC
  SELECT EXISTS(SELECT 1 FROM public.poll_submissions WHERE fingerprint = p_fingerprint) INTO v_exists;
  IF v_exists THEN
    RAISE EXCEPTION 'DUPLICATE_SUBMISSION';
  END IF;

  -- Insert submission record
  INSERT INTO public.poll_submissions (fingerprint, champion_id, polls_completed)
  VALUES (p_fingerprint, p_champion_id, jsonb_array_length(p_poll_votes))
  RETURNING created_at INTO v_created_at;

  -- Process all poll votes in the JSONB array
  FOR v_vote IN SELECT * FROM jsonb_to_recordset(p_poll_votes) AS x(poll_id BIGINT, option_id BIGINT)
  LOOP
    -- Insert vote (skip if conflict exists due to legacy single votes)
    INSERT INTO public.poll_votes (poll_id, option_id, fingerprint)
    VALUES (v_vote.poll_id, v_vote.option_id, p_fingerprint)
    ON CONFLICT (poll_id, fingerprint) DO NOTHING;

    -- Increment global vote count
    UPDATE public.poll_options
    SET actual_votes = actual_votes + 1
    WHERE id = v_vote.option_id AND poll_id = v_vote.poll_id;
  END LOOP;

  -- Retrieve updated global participant count
  SELECT COUNT(*) INTO v_participant_count FROM public.poll_submissions;

  -- Return results
  RETURN jsonb_build_object(
    'success', true,
    'created_at', v_created_at,
    'participant_count', v_participant_count
  );
END;
$$;
