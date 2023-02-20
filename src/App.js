import './App.css';
import Posts from './components/posts'
import AddPostForm from './components/addPostForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux APP</h1>
        <AddPostForm/>
        <Posts />
      </header>
    </div>
  );
}

export default App;
