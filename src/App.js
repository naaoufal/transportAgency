import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Services from './components/Services';
import Slider from './components/Slider';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <NavBar />
          <Slider />
          <Services />
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
