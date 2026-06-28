export default function Skills() {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    Backend: ['Node.js', 'Express', 'PHP'],
    Database: ['MySQL', 'PostgreSQL', 'Supabase'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Docker'],
  }

  const colors = {
    Frontend: '#e94560',
    Backend: '#0f3460',
    Database: '#533483',
    Tools: '#1a7a4a',
  }

  return (
    <div style={{
      minHeight: '90vh',
      backgroundColor: '#16213e',
      padding: '3rem 2rem',
      color: 'white',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontFamily: 'var(--font-kanit)',
        color: '#e94560',
      }}>
        ทักษะความสามารถ
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{
            backgroundColor: '#1a1a2e',
            borderRadius: '12px',
            padding: '1.5rem',
            borderTop: `4px solid ${colors[category]}`,
          }}>
            <h2 style={{
              fontFamily: 'var(--font-prompt)',
              color: colors[category],
              marginBottom: '1rem',
              fontSize: '1.3rem',
            }}>
              {category}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {items.map((skill) => (
                <li key={skill} style={{
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #333',
                  fontFamily: 'var(--font-sarabun)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{ color: colors[category] }}>▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}