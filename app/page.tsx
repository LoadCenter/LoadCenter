export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        ⚡ LOADCENTER
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#999', maxWidth: '500px' }}>
        Run your electrical business from one place.
      </p>
    </main>
  )
}