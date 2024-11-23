import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aysfndnibnselouidmbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5c2ZuZG5pYm5zZWxvdWlkbWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNTE0MDIsImV4cCI6MjA0MjcyNzQwMn0.Q8lDusvHqjmlYn4lRDKhcLnQEvOsL5GJPYE_bAd6H-c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
