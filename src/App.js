import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="col-md-8">
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
