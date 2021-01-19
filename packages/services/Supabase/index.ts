import { createClient, User } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database 
const SUPABASE_URL = 'https://dhoqqptdxcrpjwwceeoj.supabase.co'
export default createClient(SUPABASE_URL, process.env.SUPABASE_KEY)
