-- Supabase Schema for FIFA World Cup 2026 Polls

-- 1. Create Tables
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

-- 2. Create RPC Function for atomic voting
CREATE OR REPLACE FUNCTION cast_vote(p_poll_id BIGINT, p_option_id BIGINT, p_fingerprint TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- This will fail and throw an error if the unique constraint (poll_id, fingerprint) is violated
    INSERT INTO public.poll_votes (poll_id, option_id, fingerprint)
    VALUES (p_poll_id, p_option_id, p_fingerprint);

    UPDATE public.poll_options
    SET actual_votes = actual_votes + 1
    WHERE id = p_option_id AND poll_id = p_poll_id;
END;
$$;

-- 3. Seed Initial Data
TRUNCATE TABLE public.polls CASCADE;

INSERT INTO public.polls (id, question, emoji, type, searchable) VALUES
(1, 'Who will win the FIFA World Cup 2026? 🏆', '🏆', 'WINNER', false),
(2, 'Who will be the top scorer? ⚽', '⚽', 'MOTM', false),
(3, 'Which match are you most excited for? 🔥', '🔥', 'GENERAL', false),
(4, 'Who will win the Golden Ball (Best Player)? ⭐', '⭐', 'MOTM', true);

INSERT INTO public.poll_options (id, poll_id, label, sub, club, pos, seed_votes, actual_votes) VALUES
(101, 1, '🇦🇷 Argentina', 'Reigning Champions', NULL, NULL, 4820, 0),
(102, 1, '🇧🇷 Brazil', '5× Winners', NULL, NULL, 5200, 0),
(103, 1, '🇫🇷 France', '2018 Champions', NULL, NULL, 3610, 0),
(104, 1, '🇪🇸 Spain', '2010 Champions', NULL, NULL, 3290, 0),
(105, 1, '🇵🇹 Portugal', 'Dark Horse', NULL, NULL, 2190, 0),
(106, 1, '🇩🇪 Germany', '4× Winners', NULL, NULL, 2170, 0),
(107, 1, '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', '1966 Winners', NULL, NULL, 2820, 0),
(108, 1, '🇲🇦 Morocco', 'Africa''s Best', NULL, NULL, 1330, 0),
(201, 2, '🇫🇷 Kylian Mbappé', 'Real Madrid · ST', NULL, NULL, 3990, 0),
(202, 2, '🇦🇷 Lionel Messi', 'Inter Miami · CF', NULL, NULL, 3360, 0),
(203, 2, '🇧🇷 Vinicius Jr', 'Real Madrid · LW', NULL, NULL, 2240, 0),
(204, 2, '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Harry Kane', 'Bayern Munich · ST', NULL, NULL, 1980, 0),
(205, 2, '🇵🇱 Robert Lewandowski', 'Barcelona · ST', NULL, NULL, 1550, 0),
(206, 2, '🇵🇹 Cristiano Ronaldo', 'Al Nassr · ST', NULL, NULL, 2200, 0),
(301, 3, '🇦🇷 Argentina vs 🇧🇷 Brazil', 'The Greatest Rivalry', NULL, NULL, 5450, 0),
(302, 3, '🇫🇷 France vs 🇩🇪 Germany', 'European Clash', NULL, NULL, 3480, 0),
(303, 3, '🇭🇷 Croatia vs 🇧🇷 Brazil', '2022 Rematch', NULL, NULL, 3920, 0),
(304, 3, '🇪🇸 Spain vs 🇵🇹 Portugal', 'Iberian Derby', NULL, NULL, 2810, 0),
(401, 4, '🇫🇷 Kylian Mbappé', NULL, 'Real Madrid', 'ST', 380, 0),
(402, 4, '🇦🇷 Lionel Messi', NULL, 'Inter Miami', 'CF', 340, 0),
(403, 4, '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Jude Bellingham', NULL, 'Real Madrid', 'CM', 270, 0),
(404, 4, '🇩🇪 Florian Wirtz', NULL, 'Bayern Munich', 'CAM', 220, 0),
(405, 4, '🇧🇷 Vinicius Jr', NULL, 'Real Madrid', 'LW', 250, 0),
(406, 4, '🇪🇸 Lamine Yamal', NULL, 'Barcelona', 'RW', 195, 0),
(407, 4, '🇩🇪 Jamal Musiala', NULL, 'Bayern Munich', 'CAM', 180, 0),
(408, 4, '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Bukayo Saka', NULL, 'Arsenal', 'RW', 165, 0),
(409, 4, '🇲🇦 Achraf Hakimi', NULL, 'PSG', 'RB', 120, 0),
(410, 4, '🇺🇸 Christian Pulisic', NULL, 'AC Milan', 'CAM', 95, 0),
(411, 4, '🇺🇾 Federico Valverde', NULL, 'Real Madrid', 'CM', 110, 0),
(412, 4, '🇪🇸 Pedri', NULL, 'Barcelona', 'CM', 145, 0),
(413, 4, '🇧🇷 Endrick', NULL, 'Real Madrid', 'ST', 85, 0),
(414, 4, '🇧🇷 Rodrygo', NULL, 'Real Madrid', 'RW', 75, 0),
(415, 4, '🇩🇪 Leroy Sané', NULL, 'Bayern Munich', 'LW', 65, 0),
(416, 4, '🇭🇷 Luka Modrić', NULL, 'Real Madrid', 'CM', 200, 0),
(417, 4, '🇧🇪 Kevin De Bruyne', NULL, 'Man City', 'CM', 160, 0),
(418, 4, '🇳🇱 Virgil van Dijk', NULL, 'Liverpool', 'CB', 55, 0),
(419, 4, '🇯🇵 Takefusa Kubo', NULL, 'Real Sociedad', 'RW', 45, 0),
(420, 4, '🇯🇵 Kaoru Mitoma', NULL, 'Brighton', 'LW', 40, 0),
(421, 4, '🇵🇹 Rafael Leão', NULL, 'AC Milan', 'LW', 90, 0),
(422, 4, '🇳🇬 Victor Osimhen', NULL, 'Galatasaray', 'ST', 70, 0),
(423, 4, '🇸🇳 Sadio Mané', NULL, 'Al Nassr', 'LW', 60, 0),
(424, 4, '🇲🇦 Yassine Bounou', NULL, 'Al Hilal', 'GK', 35, 0),
(425, 4, '🇺🇾 Darwin Núñez', NULL, 'Liverpool', 'ST', 80, 0),
(426, 4, '🇨🇴 Luis Díaz', NULL, 'Liverpool', 'LW', 75, 0),
(427, 4, '🇦🇺 Harry Souttar', NULL, 'Leicester City', 'CB', 25, 0),
(428, 4, '🇰🇷 Lee Kang-In', NULL, 'PSG', 'CAM', 50, 0),
(429, 4, '🇺🇦 Mykhailo Mudryk', NULL, 'Chelsea', 'LW', 45, 0),
(430, 4, '🇦🇷 Giovanni Lo Celso', NULL, 'Villarreal', 'CM', 30, 0);
