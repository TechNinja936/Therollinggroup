/*
  # Add Property Type to Contact Submissions

  1. Changes
    - Add `property_type` column to `contact_submissions` table
      - Type: text
      - Default: empty string
      - Stores the type of commercial property (Office, Retail, Industrial, etc.)
  
  2. Notes
    - This field helps route inquiries to the appropriate team
    - Non-breaking change, existing records will have empty string
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'property_type'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN property_type text DEFAULT '';
  END IF;
END $$;
