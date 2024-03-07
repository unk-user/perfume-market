import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './scrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full max-md:w-screen relative flex-col flex min-h-screen">
        <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='shop/products/:productId' element={<ProductPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default App;
