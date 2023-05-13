import React, { useContext } from 'react';
import House from './House';
// import context
import { HouseContext } from './HouseContext';
// import link
import { Link } from 'react-router-dom';
// import icons
import { ImSpinner2 } from 'react-icons/im';


const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log(houses);

// if loading is true 
if (loading) {
  return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'></ImSpinner2>)
}

// if there is no result for the search
if (houses.length < 1) {
  return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, Didn't matched any</div>
}

  return (
    <section className='mb-20'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {
            houses.map((house, index) => {
              return (
                <Link to={`/property/${house.id}`}>
                  <House house={house} key={index}></House>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>);
};

export default HouseList;
