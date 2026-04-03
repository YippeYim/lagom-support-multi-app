import { createBrowserClient } from '@supabase/ssr'

function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
              persistSession: true, // This is true by default, but good to be explicit
              detectSessionInUrl: true 
            }
      }
    )
}

const supabase = createClient()

export {supabase}