import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'เว็บไซต์ Portfolio ส่วนตัวสำหรับแสดงผลงานและประวัติของตนเอง',
    tech: ['Next.js', 'TypeScript', 'CSS'],
    role: 'Full Stack Developer',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    name: 'E-Commerce Shop',
    description: 'เว็บไซต์ขายสินค้าออนไลน์ มีระบบตะกร้าสินค้าและชำระเงิน',
    tech: ['React', 'Node.js', 'MySQL'],
    role: 'Frontend Developer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'แอปพลิเคชันจัดการงานและ To-do list พร้อมระบบแจ้งเตือน',
    tech: ['React', 'Express', 'PostgreSQL'],
    role: 'Full Stack Developer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  },
]

export default function Projects() {
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
        ผลงาน
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            backgroundColor: '#1a1a2e',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #333',
          }}>
            {/* รูปภาพ */}
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* เนื้อหา */}
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-kanit)',
                color: '#e94560',
                marginBottom: '0.5rem',
              }}>
                {project.name}
              </h2>

              <p style={{
                fontFamily: 'var(--font-sarabun)',
                color: '#ccc',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    backgroundColor: '#e94560',
                    color: 'white',
                    padding: '0.2rem 0.7rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-prompt)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Role & Year */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#aaa',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sarabun)',
                borderTop: '1px solid #333',
                paddingTop: '0.8rem',
              }}>
                <span>👤 {project.role}</span>
                <span>📅 {project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}