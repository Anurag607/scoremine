
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iildcirljedzzlqnovio.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbGRjaXJsamVkenpscW5vdmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2Mjc5MjgsImV4cCI6MTk4MzIwMzkyOH0.9PMXJyrVUtFoYVtJJvAgckW1dtbr0FZ74HdTxbrSnZc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;