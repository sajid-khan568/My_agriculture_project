
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <>

      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


