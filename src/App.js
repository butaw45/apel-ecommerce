import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route to='/' component={<Home />} />
        <Route to='/about' component={<About />} />
        <Route to='/product' component={<Product />} />
        <Route to='/contact' component={<Contact />} />
        <Navigate to='/' />
      </Routes>
    </>
  );
}

export default App;
