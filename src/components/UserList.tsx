import { useUsers } from '../hooks/useUsers';

function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;

  return (
    <section>
      <h2>Users</h2>
      <ul className="card-list">
        {users.map((user) => (
          <li key={user.id} className="card">
            <strong>{user.name}</strong> ({user.username}) &mdash; {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
