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
    setloading(true);
    // console.log(country, property, price);
    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }
    // console.log(isDefault(country));
    // get first value of price range and parse it to number
    const minPrice = (parseInt(price.split(' ')[0]));
    // get second value of price range and parse it to number
    const maxPrice = (parseInt(price.split(' ')[2]));

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      //! searching logics
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      //! if all values are defult 
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //! if only country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //! if only property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      //! if only price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //! if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      //! if country & price is not default 
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //! if property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() =>{
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setloading(false)
      );
    },1000);
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
      handleClick,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
