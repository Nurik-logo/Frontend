export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginTop: 'auto',
      backdropFilter: 'blur(10px)'
    }}>
      <p>&copy; 2026 My Blog. All rights reserved.</p>
      <p style={{ color: 'var(--accent)' }}>
        Made with ❤️ using Next.js
      </p>
    </footer>
  );
}