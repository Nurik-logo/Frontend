import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '15px 20px',
      position: 'sticky',
      top: '0',
      zIndex: '100',
      borderBottom: '2px solid var(--primary)'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          color: 'var(--primary)',
          textDecoration: 'none',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          My Blog
        </Link>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: '0',
          padding: '0'
        }}>
          <li>
            <Link href="/" style={{
              color: 'var(--foreground)',
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" style={{
              color: 'var(--foreground)',
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--secondary)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}