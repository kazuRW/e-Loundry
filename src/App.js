import logo from './laundry.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Contoh gambar untuk carousel (Anda bisa mengganti dengan gambar Anda sendiri)
import image1 from './image1.jpg'; // Pastikan Anda memiliki gambar ini di folder src Anda
import image2 from './image2.jpg'; // Pastikan Anda memiliki gambar ini di folder src Anda
import image3 from './image3.jpg'; // Pastikan Anda memiliki gambar ini di folder src Anda

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
      </header>

      {/* Bagian Carousel di bawah header */}
      <main className="App-main-content">
        <h1>Selamat Datang di Aplikasi E-Laundry Anda!</h1>
        <p>Temukan layanan laundry terbaik dengan mudah dan cepat.</p>

        <div className="carousel-container">
          <Carousel
            showArrows={true} // Menampilkan panah navigasi
            infiniteLoop={true} // Mengulang carousel tanpa henti
            showThumbs={false} // Menyembunyikan thumbnail di bawah
            showStatus={false} // Menyembunyikan status (misal: 1 of 3)
            autoPlay={true} // Otomatis berputar
            interval={3000} // Durasi setiap slide (dalam milidetik)
          >
            <div>
              <img src={image1} alt="Layanan Cuci Kering" />
              <p className="legend">Layanan Cuci Kering Terbaik</p>
            </div>
            <div>
              <img src={image2} alt="Pengiriman Cepat" />
              <p className="legend">Pengiriman dan Pengambilan Cepat</p>
            </div>
            <div>
              <img src={image3} alt="Diskon Spesial" />
              <p className="legend">Diskon Spesial untuk Pelanggan Baru!</p>
            </div>
          </Carousel>
        </div>

        {/* Konten lain di halaman beranda bisa ditambahkan di sini */}
        <section className="features-section">
          <h2>Fitur Unggulan Kami:</h2>
          <ul>
            <li>Pemesanan Mudah via Aplikasi</li>
            <li>Layanan Antar Jemput</li>
            <li>Pencucian Berkualitas Tinggi</li>
            <li>Harga Kompetitif</li>
          </ul>
        </section>

      </main>

      {/* Anda bisa menambahkan footer di sini jika ada */}
      <footer className="App-footer">
        <p>&copy; 2025 E-Laundry. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
