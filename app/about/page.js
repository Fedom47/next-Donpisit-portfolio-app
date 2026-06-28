export default function About() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto', color: 'white', fontFamily: 'var(--font-sarabun)' }}>
      <h1 style={{ fontFamily: 'var(--font-kanit)', color: '#e94560', fontSize: '2rem' }}>เกี่ยวกับฉัน</h1>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>ประวัติส่วนตัว</h2>
        <p>ชื่อ: ดลพิษิฐ สุทธิโรจน์รักษา | อายุ: 26 ปี | ที่อยู่: สมุทรสาคร</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>ประวัติการศึกษา</h2>
        <p>มหาวิทยาลัย เอเชีย อาคเนย์ </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Career Objective</h2>
        <p>ต้องการเป็น Web Developer ที่มีความสามารถในการพัฒนาเว็บไซต์ที่สวยงามและใช้งานได้จริง</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>จุดแข็ง</h2>
        <ul>
          <li>เรียนรู้สิ่งใหม่ได้รวดเร็ว</li>
          <li>ทำงานเป็นทีมได้ดี</li>
          <li>ละเอียดรอบคอบ</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>ความสนใจ</h2>
        <p>Web Development, UI/UX Design, Open Source</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>งานอดิเรก</h2>
        <p>ดูหนัง, เล่นเกม, ถ่ายรูป</p>
      </section>
    </div>
  )
}

const sectionStyle = {
  backgroundColor: '#1a1a2e',
  padding: '1.5rem',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  borderLeft: '4px solid #e94560',
}

const headingStyle = {
  fontFamily: 'var(--font-prompt)',
  color: '#e94560',
  marginBottom: '0.5rem',
}