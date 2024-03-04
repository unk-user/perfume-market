import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className='w-screen relative flex-col flex min-h-screen'>
        <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
