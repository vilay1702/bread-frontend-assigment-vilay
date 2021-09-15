import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import './css/customize.scss';  
import AOS from 'aos';

AOS.init();

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
