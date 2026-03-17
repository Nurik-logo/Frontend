import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Dashboard({ time }: any) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#333', 
          fontSize: '2.5em', 
          margin: '0',
          fontWeight: 'bold'
        }}>
          Dashboard
        </h1>
        <p style={{ color: '#666', margin: '10px 0 0 0', fontSize: '1.1em' }}>
          Admin panel for managing the blog
        </p>
      </div>
      
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '40px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px', fontSize: '1.8em' }}>
          Server Status
        </h2>
        <div style={{ 
          backgroundColor: 'var(--light)', 
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <p style={{ 
            fontSize: '1.2em', 
            color: 'var(--foreground)', 
            margin: '0',
            fontFamily: 'monospace',
            fontWeight: 'bold'
          }}>
            Current Time: {new Date(time).toLocaleString()}
          </p>
        </div>
        <div style={{ 
          backgroundColor: 'rgba(40, 167, 69, 0.1)', 
          padding: '15px',
          borderRadius: '8px',
          borderLeft: '4px solid var(--success)'
        }}>
          <p style={{ margin: '0', color: 'var(--success)', fontWeight: 'bold' }}>
            ✅ Server is running smoothly
          </p>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px', 
        textAlign: 'center'
      }}>
        <Link href="/" style={{ 
          display: 'inline-block',
          backgroundColor: 'var(--primary)',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1em',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 4px var(--shadow)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--secondary)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 8px var(--shadow)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--primary)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px var(--shadow)';
        }}
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
