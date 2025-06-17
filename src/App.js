import logo from './laundry.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navigation Bar */}
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav-links">
            <li><a href="/">Beranda</a></li>
            <li><a href="/layanan">Layanan</a></li>
            <li><a href="/tentang">Tentang Kami</a></li>
            <li><a href="/kontak">Kontak</a></li>
          </ul>
        </nav>

        {/* Konten Utama Header */}
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
