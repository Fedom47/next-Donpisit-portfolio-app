import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#16213e',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-kanit)',
    }}>
      {/* รูปโปรไฟล์ */}
      <Image
        src="/images/profile.jpg"   // ไว้ใส่รูปของตัวเองใน public/images/
        alt="Profile"
        width={200}
        height={200}
        style={{ borderRadius: '50%', border: '4px solid #e94560', objectFit: 'cover' }}
      />

      {/* ชื่อ */}
      <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', fontFamily: 'var(--font-kanit)' }}>
        ดลพิษิฐ สุทธิโรจน์รักษา
      </h1>

      {/* ตำแหน่ง */}
      <p style={{ fontSize: '1.3rem', color: '#e94560' }}>
        Front-end Developer | Web Developer
      </p>

      {/* คำแนะนำตัว */}
      <p style={{ maxWidth: '600px', lineHeight: '1.8', marginTop: '1rem', fontFamily: 'var(--font-sarabun)' }}>
        สวัสดีครับ ผมชื่อดลพิษิฐ สุทธิโรจน์รักษา มีความสนใจด้านการพัฒนาเว็บไซต์
        และกำลังมองหาโอกาสใหม่ๆ ในสายงาน Web Development ครับ
      </p>

      {/* ปุ่ม */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/about" style={btnStyle}>เกี่ยวกับฉัน</Link>
        <Link href="/me/projects" style={btnStyle}>ผลงาน</Link>
        <Link href="/contact" style={{...btnStyle, backgroundColor: 'transparent', border: '2px solid #e94560'}}>ติดต่อ</Link>
      </div>
    </div>
  )
}

const btnStyle = {
  backgroundColor: '#e94560',
  color: 'white',
  padding: '0.8rem 1.5rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontFamily: 'var(--font-prompt)',
  fontSize: '1rem',
}