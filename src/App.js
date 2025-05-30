import logo from './laundry.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat datang di aplikasi e-loundry.
        </p>
        <a
          className="App-link"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat selengkapnya
        </a>
      </header>
    </div>
  );
}

export default App;
