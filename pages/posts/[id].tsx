import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

type PostProps = {
  post: {
    id: string;
    title: string;
    content: string;
  };
};

export default function Post({ post }: PostProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <article style={{ 
        backgroundColor: '#fff', 
        padding: '40px', 
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#333', 
            fontSize: '2.5em', 
            margin: '0 0 15px 0',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          <p style={{ 
            color: '#666', 
            margin: '0',
            fontSize: '1em',
            fontStyle: 'italic'
          }}>
            Post ID: {id} • Published on {new Date().toLocaleDateString()}
          </p>
        </header>
        
        <div style={{ 
          lineHeight: '1.8', 
          fontSize: '1.1em',
          color: '#444'
        }}>
          <p style={{ marginBottom: '20px' }}>
            {post.content}
          </p>
          <p style={{ marginBottom: '20px' }}>
            This is additional content for the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
      
      <div style={{ 
        textAlign: 'center'
      }}>
        <Link href="/" style={{ 
          display: 'inline-block',
          backgroundColor: 'var(--success)',
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
          e.currentTarget.style.backgroundColor = 'var(--success)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px var(--shadow)';
        }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  
  const posts = {
    "1": { id: "1", title: "First Post", content: "This is the content of the first post. It contains some interesting information about various topics." },
    "2": { id: "2", title: "Second Post", content: "This is the content of the second post. Here you can find more details and insights." }
  };

  const post = posts[id as keyof typeof posts] || { id, title: "Post not found", content: "Sorry, this post doesn't exist." };

  return {
    props: { post },
  };
};
