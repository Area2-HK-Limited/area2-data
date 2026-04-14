-- Daily Pulse Database Schema
-- PostgreSQL + PostgREST setup

-- Create schemas
CREATE SCHEMA IF NOT EXISTS api;

-- Create roles
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'web_anon') THEN
    CREATE ROLE web_anon NOLOGIN;
  END IF;
END
$$;

GRANT USAGE ON SCHEMA api TO web_anon;

-- Users table (for future multi-user support)
CREATE TABLE api.users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  timezone VARCHAR(50) DEFAULT 'Asia/Hong_Kong',
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Calendar events cache
CREATE TABLE api.calendar_events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES api.users(id) ON DELETE CASCADE,
  external_id VARCHAR(255),
  title VARCHAR(500) NOT NULL,
  description TEXT,
  location VARCHAR(500),
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ,
  all_day BOOLEAN DEFAULT FALSE,
  source VARCHAR(50) DEFAULT 'ical',
  raw_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, external_id)
);

-- Market data cache
CREATE TABLE api.market_data (
  id SERIAL PRIMARY KEY,
  symbol VARCHAR(20) NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL,
  open DECIMAL(12, 4),
  high DECIMAL(12, 4),
  low DECIMAL(12, 4),
  close DECIMAL(12, 4),
  volume BIGINT,
  interval VARCHAR(10) DEFAULT '1d',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(symbol, timestamp, interval)
);

-- Weather cache
CREATE TABLE api.weather_cache (
  id SERIAL PRIMARY KEY,
  location VARCHAR(100) NOT NULL,
  forecast_date DATE NOT NULL,
  temperature_high DECIMAL(4, 1),
  temperature_low DECIMAL(4, 1),
  condition VARCHAR(100),
  humidity INTEGER,
  rain_chance INTEGER,
  uv_index INTEGER,
  raw_data JSONB,
  fetched_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(location, forecast_date)
);

-- Daily briefings (AI-generated)
CREATE TABLE api.briefings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES api.users(id) ON DELETE CASCADE,
  briefing_date DATE NOT NULL,
  content TEXT NOT NULL,
  summary VARCHAR(500),
  sections JSONB DEFAULT '{}',
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, briefing_date)
);

-- User preferences
CREATE TABLE api.preferences (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES api.users(id) ON DELETE CASCADE,
  key VARCHAR(100) NOT NULL,
  value JSONB,
  UNIQUE(user_id, key)
);

-- Grant permissions
GRANT SELECT ON ALL TABLES IN SCHEMA api TO web_anon;
GRANT INSERT, UPDATE ON api.calendar_events TO web_anon;
GRANT INSERT, UPDATE ON api.market_data TO web_anon;
GRANT INSERT, UPDATE ON api.weather_cache TO web_anon;
GRANT INSERT, UPDATE ON api.briefings TO web_anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA api TO web_anon;

-- Insert default user (Template User)
-- Note: Real data should be loaded from USER_PROFILE.json via API
INSERT INTO api.users (name, email, timezone, settings) VALUES (
  'Default User',
  'user@example.com',
  'Asia/Hong_Kong',
  '{
    "locations": ["Location A", "Location B"],
    "market_symbols": ["^SPX"],
    "briefing_time": "08:00"
  }'::jsonb
);

-- Create indexes for performance
CREATE INDEX idx_calendar_events_user_time ON api.calendar_events(user_id, start_time);
CREATE INDEX idx_market_data_symbol_time ON api.market_data(symbol, timestamp DESC);
CREATE INDEX idx_weather_cache_location_date ON api.weather_cache(location, forecast_date);
CREATE INDEX idx_briefings_user_date ON api.briefings(user_id, briefing_date DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON api.users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
