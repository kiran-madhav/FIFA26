-- Full Supabase Schema for FIFA World Cup 2026 Polls

-- 1. Create Base Tables
CREATE TABLE IF NOT EXISTS public.polls (
  id BIGINT PRIMARY KEY,
  question TEXT NOT NULL,
  emoji TEXT NOT NULL,
  type TEXT NOT NULL,
  searchable BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS public.poll_options (
  id BIGINT PRIMARY KEY,
  poll_id BIGINT REFERENCES public.polls(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  sub TEXT,
  club TEXT,
  pos TEXT,
  seed_votes BIGINT DEFAULT 0,
  actual_votes BIGINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.poll_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  poll_id BIGINT REFERENCES public.polls(id) ON DELETE CASCADE,
  option_id BIGINT REFERENCES public.poll_options(id) ON DELETE CASCADE,
  fingerprint TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(poll_id, fingerprint)
);

CREATE TABLE IF NOT EXISTS public.poll_submissions (
  fingerprint TEXT PRIMARY KEY,
  champion_id BIGINT,
  polls_completed INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Bulk Submission RPC
CREATE OR REPLACE FUNCTION submit_predictions(
  p_fingerprint TEXT,
  p_champion_id BIGINT,
  p_poll_votes JSONB
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

-- 3. Seed Initial Data
TRUNCATE TABLE public.polls CASCADE;

INSERT INTO public.polls (id, question, emoji, type, searchable) VALUES
(2, 'Which big team goes home in the group stage and embarrasses themselves? ✈️', '✈️', 'GENERAL', false),
(3, 'One player will do something so stupid it breaks the internet. Who is it? 📱', '📱', 'GENERAL', false),
(4, 'Who wins the Golden Boot? 🥾', '🥾', 'MOTM', false),
(5, 'The controversial debate we need to end — Argentina or Brazil? ⚔️', '⚔️', 'GENERAL', false);

INSERT INTO public.poll_options (id, poll_id, label, sub, club, pos, seed_votes, actual_votes) VALUES
(201, 2, '🇩🇪 Germany', NULL, NULL, NULL, 9000, 0),
(202, 2, '🇧🇷 Brazil', NULL, NULL, NULL, 6000, 0),
(203, 2, '🇦🇷 Argentina', NULL, NULL, NULL, 3000, 0),
(204, 2, '🇫🇷 France', NULL, NULL, NULL, 1980, 0),
(301, 3, '🇪🇸 Lamine Yamal', NULL, NULL, NULL, 12000, 0),
(302, 3, '🇧🇷 Vinicius Junior', NULL, NULL, NULL, 7000, 0),
(303, 3, '🇫🇷 Kylian Mbappé', NULL, NULL, NULL, 3920, 0),
(304, 3, '🇳🇴 Erling Haaland', NULL, NULL, NULL, 2810, 0),
(401, 4, '🇫🇷 Kylian Mbappé', NULL, NULL, NULL, 70, 0),
(402, 4, '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Harry Kane', NULL, NULL, NULL, 214, 0),
(403, 4, '🇳🇴 Erling Haaland', NULL, NULL, NULL, 193, 0),
(404, 4, '🇪🇸 Lamine Yamal', NULL, NULL, NULL, 60, 0),
(501, 5, '🇧🇷 Brazil', NULL, NULL, NULL, 231, 0),
(502, 5, '🇦🇷 Argentina', NULL, NULL, NULL, 186, 0),
(503, 5, '🤷‍♂️ Ask me again in 50 years', NULL, NULL, NULL, 69, 0);
