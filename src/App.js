import perenoel from './pere-noel.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ma Liste au Père Noël</h1>
        <img src={perenoel} className="App-logo" alt="logo" />
        <p>

        <div name="liste">
        <ul>

        <li>Raspberry Pi</li>
        <li>Voiture</li>
        <li>Imprimante 3D</li>

        </ul>
        </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}


export default App;
