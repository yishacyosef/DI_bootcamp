import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <MoviesList/>
        </p>
      </header>
    </div>
  );
}

export default App;
