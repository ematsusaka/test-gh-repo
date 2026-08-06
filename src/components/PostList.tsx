import { usePosts } from '../hooks/usePosts';

function PostList() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error}</p>;

  return (
    <section>
      <h2>Posts</h2>
      <ul className="card-list">
        {posts.map((post) => (
          <li key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostList;
