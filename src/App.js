import 'normalize.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Header } from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Cars from './pages/Cars/Cars';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import Car from './pages/Car/Car';
import Shipping from './pages/Shipping/Shipping';
import Warranty from './pages/Warranty/Warranty';
import Financing from './pages/Financing/Financing';

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/car/:id" element={<Car />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/financing" element={<Financing />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
