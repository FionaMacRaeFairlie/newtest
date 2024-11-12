// Greeting.js
import React from 'react';


const Greeting = ({ name }) => (
  <div className="jumbotron">
    <h1 className="display-4">Hello, {name}!</h1>
  </div>
);

export default Greeting; 
