import React, { useState, useEffect, useContext } from 'react';
import { AiFillHome, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext';


const PropertyDropDown = () => {
  const { property, setProperty, propertise } = useContext(HouseContext);
  // console.log(propertise);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <AiFillHome className='dropdown-icon-primary'></AiFillHome>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your Type</div>
        </div>
        {
          isOpen ? (
            <AiOutlineArrowUp className='dropdown-icon-secondary'></AiOutlineArrowUp>
          ) : (
            <AiOutlineArrowDown className='dropdown-icon-secondary'></AiOutlineArrowDown>
          )
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {
          propertise.map((property, index) => {
            return (
              <Menu.Item
                onClick={() => setProperty(property)}
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
                key={index}>
                {property}
              </Menu.Item>
            )
          })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropDown;
