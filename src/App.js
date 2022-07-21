import './App.css';

// Components
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/ImageGallery';

function App() {
  return (
    <body className="text-white gradient">
      <Header />

      <section className="bg-black border-b pt-8">
        <Gallery />
        <ContactUs />
        <Footer />
      </section>

    </body>
  );
}

export default App;
