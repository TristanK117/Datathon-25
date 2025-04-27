import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import DataAnalysis from './components/DataAnalysis';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <DataAnalysis />
      <Summary />
      <Footer />
    </>
  );
}

export default App;
