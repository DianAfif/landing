import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://jbqqxyrytbqwcwqiyfhe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicXF4eXJ5dGJxd2N3cWl5ZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3Nzk3NzIsImV4cCI6MjAwNTM1NTc3Mn0.F1e_z6vhOR0K7IUT-77KQhmQWoZWy8C_h1ueUkuw3kY');


export function initSupabase() {
    console.log('test')
}

export async function testSupa() {
	const { data: countries, error } = await supabase.from('countries').select('*');
    console.log(error)
    return countries
}
