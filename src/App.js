import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import CategoryPage from './CategoryPage';
import DetailsPage from './DetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/details/:itemName" element={<DetailsPage />} /> 
        <Route path="/:categoryName" element={<CategoryPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
