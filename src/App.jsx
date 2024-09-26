import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx'; 
import Catalog from './components/Catalog/Catalog.jsx';
import Header from './components/Header/Header.jsx';
import Details from './components/Details/Details.jsx';
import './App.css';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ed5c53ad19ca34f8a985cc')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const dogsArray = data.record;
        const sortedDogs = dogsArray.sort((a, b) => a.name.localeCompare(b.name));
        const breedsArray = [...new Set(sortedDogs.map((dog) => dog.breed))];
        setDogs(sortedDogs);
        setBreeds(breedsArray);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching dog data:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          {isLoading ? (
            <p>Loading...</p> 
          ) : (
            <Routes>
              <Route path="/" element={<Home dogs={dogs} breeds={breeds} />} />
              <Route path="/catalog" element={<Catalog dogs={dogs} breeds={breeds} />} />
              <Route path="/details" element={<Details dogs={dogs} />} />
              <Route path="/details/:chipNumber" element={<Details dogs={dogs} />} /> 
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
