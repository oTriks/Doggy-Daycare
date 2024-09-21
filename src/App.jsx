import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './components/Home.jsx'; 
import Catalog from './components/Catalog.jsx';
import Header from './components/Header.jsx';
import Details from './components/Details.jsx'; // Import the new component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header stays constant across all pages */}
        <Header />

        {/* Define routes for Home and Catalog */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details" element={<Details />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
