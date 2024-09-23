
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'; 
import Catalog from './components/Catalog.jsx';
import Header from './components/Header.jsx';
import Details from './components/Details.jsx'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* Add both routes for Details */}
          <Route path="/details" element={<Details />} />
          <Route path="/details/:chipNumber" element={<Details />} /> 
        </Routes>
      </div>
      </div>

    </Router>
  );
}

export default App;
