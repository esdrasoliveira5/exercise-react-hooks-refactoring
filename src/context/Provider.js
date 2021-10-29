// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

  const [ cars, setCars ] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  });

  const [ signal, setSignal ] = useState('red');

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  function changeSignal(signalColor) {
    setSignal(signalColor);
  };

  const context = {
    cars,
    moveCar,
    signal,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
