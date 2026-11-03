const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://uzoedmpakrlemdiyszbh.supabase.co'
const supabaseKey = 'sb_publishable_WgGKWLofPI5RlyCUL04yJg_g0pYFFBo'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('Estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}
obtenerEstudiantes()