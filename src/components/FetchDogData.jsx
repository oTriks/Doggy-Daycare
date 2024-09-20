import React, { useState, useEffect } from 'react';

const FetchDogData = () => {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ed5c53ad19ca34f8a985cc') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nätverksfel!');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []); 


  return (
    <div>
        
    </div>
  );
};

export default FetchDogData;
