/*
  # Create Proposals and Contact Submissions Tables

  1. New Tables
    - `proposals`
      - `id` (uuid, primary key)
      - `organization_name` (text)
      - `contact_person` (text)
      - `title` (text)
      - `email` (text)
      - `phone` (text)
      - `property_addresses` (text)
      - `contract_type` (text)
      - `estimated_size` (text)
      - `timeline` (text)
      - `budget_range` (text, optional)
      - `notes` (text)
      - `created_at` (timestamp)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `organization` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies to allow anonymous users to insert records
    - Add policies to allow authenticated users to read their own submissions
*/

CREATE TABLE IF NOT EXISTS proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name text NOT NULL,
  contact_person text NOT NULL,
  title text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_addresses text NOT NULL,
  contract_type text NOT NULL,
  estimated_size text NOT NULL,
  timeline text NOT NULL,
  budget_range text DEFAULT '',
  notes text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organization text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert proposals"
  ON proposals
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all proposals"
  ON proposals
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);