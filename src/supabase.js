import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jvrpasrdzfabgbhjmmqh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cnBhc3JkemZhYmdiaGptbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDY2NTcsImV4cCI6MjAwNjgyMjY1N30.MeeDkY0GLTIeuC-YxDDI8YHBjbbEce_BmFgXyeExX54';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;