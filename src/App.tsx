import UserList from './components/UserList';
import PostList from './components/PostList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Demo App</h1>
      </header>
      <main className="app-main">
        <UserList />
        <PostList />
      </main>
    </div>
  );
}

export default App;
