import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route to='/' element={<Home />} />
        <Route to='/about' element={<About />} />
        <Route to='/product' element={<Product />} />
        <Route to='/contact' element={<Contact />} />
        {/* <Navigate to='/' /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
