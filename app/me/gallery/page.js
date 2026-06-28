import Image from 'next/image'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    alt: 'Coding on laptop',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    alt: 'Programming code',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    alt: 'Writing code',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop',
    alt: 'Developer workspace',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
    alt: 'Coding setup',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop',
    alt: 'Developer at work',
  },
]

export default function Gallery() {
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
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-kanit)',
        color: '#e94560',
      }}>
        Gallery
      </h1>
      <p style={{
        textAlign: 'center',
        color: '#aaa',
        marginBottom: '2rem',
        fontFamily: 'var(--font-sarabun)',
      }}>
        ภาพการทำงานและเขียนโปรแกรม
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{
            position: 'relative',
            height: '220px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid #333',
            transition: 'transform 0.3s',
          }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}