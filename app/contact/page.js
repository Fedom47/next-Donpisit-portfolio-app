export default function Contact() {
  return (
    <div style={{
      minHeight: '90vh',
      backgroundColor: '#16213e',
      padding: '3rem 2rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-kanit)',
        color: '#e94560',
      }}>
        ติดต่อฉัน
      </h1>
      <p style={{
        color: '#aaa',
        marginBottom: '3rem',
        fontFamily: 'var(--font-sarabun)',
      }}>
        สามารถติดต่อได้ทางช่องทางด้านล่างนี้
      </p>

      {/* การ์ดข้อมูลติดต่อ */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '500px',
        marginBottom: '3rem',
      }}>

        {/* Email */}
        <div style={cardStyle}>
          <span style={iconStyle}>📧</span>
          <div>
            <p style={labelStyle}>Email</p>
            <a href="mailto:S6852D10008@sau.ac.th" style={linkStyle}>
              S6852D10008@sau.ac.th
            </a>
          </div>
        </div>

        {/* เบอร์โทร */}
        <div style={cardStyle}>
          <span style={iconStyle}>📱</span>
          <div>
            <p style={labelStyle}>เบอร์โทรศัพท์</p>
            <a href="tel:0638803278" style={linkStyle}>
              0638803278
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div style={cardStyle}>
          <span style={iconStyle}>🐙</span>
          <div>
            <p style={labelStyle}>GitHub</p>
            <a
              href="https://github.com/Fedom47"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              github.com/Fedom47
            </a>
          </div>
        </div>

      </div>

      {/* ปุ่ม Download Resume */}
      <a    
        href="/resume.pdf"
        download
        style={{
          backgroundColor: '#e94560',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontFamily: 'var(--font-prompt)',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        ⬇️ Download Resume
      </a>
    </div>
  )
}

const cardStyle = {
  backgroundColor: '#1a1a2e',
  borderRadius: '12px',
  padding: '1.2rem 1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: '1px solid #333',
  borderLeft: '4px solid #e94560',
}

const iconStyle = {
  fontSize: '1.8rem',
}

const labelStyle = {
  margin: 0,
  color: '#aaa',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-sarabun)',
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'var(--font-prompt)',
  fontSize: '1rem',
}