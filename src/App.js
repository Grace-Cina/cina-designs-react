import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;