'use client'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav style={{
      backgroundColor: '#1a1a2e',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '1.5rem',
    }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link href="/me/skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</Link>
      <Link href="/me/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
      <Link href="/me/gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</Link>
      <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  )
}