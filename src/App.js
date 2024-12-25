import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// import ZidioTaskManagement from './ZidioTaskManagement/ZidioTaskManagement'


const App = () => {
  return (
    <Router>
     
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>

  );
};

export default App;