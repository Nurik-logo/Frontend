import { GetStaticProps } from "next";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
};

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#333', 
          fontSize: '3em', 
          margin: '0',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Welcome to My Blog
        </h1>
        <p style={{ 
          color: '#666', 
          margin: '20px 0 0 0',
          fontSize: '1.2em'
        }}>
          Discover amazing stories and insights
        </p>
      </section>
      
      <section>
        <h2 style={{ 
          color: 'var(--foreground)', 
          borderBottom: '3px solid var(--primary)', 
          paddingBottom: '10px',
          marginBottom: '30px',
          fontSize: '2em'
        }}>
          Latest Posts
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {posts.map((post) => (
            <article key={post.id} style={{ 
              backgroundColor: 'var(--light)', 
              padding: '25px', 
              borderRadius: '12px',
              boxShadow: '0 4px 8px var(--shadow)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid rgba(0,123,255,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 16px var(--shadow)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px var(--shadow)';
              e.currentTarget.style.borderColor = 'rgba(0,123,255,0.2)';
            }}
            >
              <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ 
                  color: '#333', 
                  margin: '0 0 15px 0',
                  fontSize: '1.4em',
                  fontWeight: '600'
                }}>
                  {post.title}
                </h3>
                <p style={{ color: '#777', margin: '0', fontSize: '1em' }}>
                  Read this fascinating post about interesting topics...
                </p>
                <span style={{
                  display: 'inline-block',
                  marginTop: '15px',
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  fontSize: '0.9em'
                }}>
                  Read More →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = [
    { id: "1", title: "First Post" },
    { id: "2", title: "Second Post" },
  ];

  return {
    props: { posts },
  };
};
