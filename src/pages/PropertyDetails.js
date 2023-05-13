import React from 'react';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  // get house id
  const { id } = useParams();
  // console.log(id);
  //get the house based on the id 
  const house = housesData.find(house => house.id === parseInt(id));

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 rounded-full text-white px-3'>{house.type}</div>
            <div className='bg-violet-500 rounded-full text-white px-3'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>$ {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl'></BiBed>
                <div>{house.bedrooms}</div>
              </div>
              <div>
                <BiBath className='text-2xl'></BiBath>
                <div>{house.bathrooms}</div>
              </div>
              <div>
                <BiArea className='text-2xl'></BiArea>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div>
            <div>
              <div>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div> {}         </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
