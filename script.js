// script.js - Shared Supabase client and helpers

// ==================== SUPABASE CONFIGURATION ====================
// REPLACE with your actual Supabase URL and anon key from https://supabase.com/dashboard
const SUPABASE_URL = 'https://your-project.supabase.co';   // <-- CHANGE THIS
const SUPABASE_ANON_KEY = 'your-anon-key';                 // <-- CHANGE THIS

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== GLOBAL HELPER FUNCTIONS ====================
async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) return null;
  return user;
}

async function getCurrentDoctor() {
  const user = await getCurrentUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('id', user.id)
    .single();
  if (error) return null;
  return data;
}

async function logout() {
  await supabase.auth.signOut();
  window.location.reload();
}

// Make available globally
window.supabase = supabase;
window.getCurrentUser = getCurrentUser;
window.getCurrentDoctor = getCurrentDoctor;
window.logout = logout;
