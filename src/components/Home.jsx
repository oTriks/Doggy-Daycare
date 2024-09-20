import React from 'react';
import '../CSS/Home.css'; 



const Home = () => {
  return (
    <header className="header">
      <div className="header-left">
      <img src="./assets/dogLogo.png" alt="Doggy Daycare Icon" className="icon" />
      <h1 className="title">Doggy Daycare</h1>
      </div>

      <div className="header-right">
        <span className="headerText">Specific Information</span>
        <span className="divider"></span>
        <span className="headerText">Catalog</span>

        <div className="flags">
        <img src="/assets/SWE.png" alt="Swedish Flag" className="flag" />
        <img src="./assets/US.png" alt="American Flag" className="flag" />
        </div>
      </div>
    </header>
  );
}

export default Home;
