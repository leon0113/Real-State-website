import React, { createContext, useEffect, useState } from 'react';
import { housesData } from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [propertise, setPropertise] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setloading] = useState(false);

  ///! return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allCountries);
    //remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    // set coutries state
    setCountries(uniqueCountries);
  }, []);

  ///! return all Propertise
  useEffect(() => {
    const allPropertise = houses.map((house) => {
      return house.type;
    });
    // console.log(allCountries);
    //remove duplicates
    const uniquePropertise = ['Property (any)', ...new Set(allPropertise)];
    // set propertise state
    setPropertise(uniquePropertise);
  }, []);

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      propertise,
      price,
      setPrice,
      houses,
      loading,
      handleClick
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
