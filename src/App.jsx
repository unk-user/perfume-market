import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <Router>
      <div className="w-full relative flex-col flex min-h-screen">
        <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
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
