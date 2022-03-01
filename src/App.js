import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Navigate path='/' /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
