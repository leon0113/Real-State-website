import React, { useState, useEffect, useContext } from 'react';
import { AiFillWallet, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
// import { FaMapMarkerAlt } from 'react-icons/fa';
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext';


const PriceRangeDropDown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '220000 - 250000'
    },
    {
      value: '250000 - 280000'
    },
    {
      value: '280000 - 310000'
    },
    {
      value: '310000 - 340000'
    },
    {
      value: '340000 - 370000'
    },
    {
      value: '370000 - 400000'
    }
  ];

  return (
    <Menu as='div' className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <AiFillWallet className='dropdown-icon-primary'></AiFillWallet>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
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
          prices.map((price, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price.value)}
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
                key={index}>
                {price.value}
              </Menu.Item>
            )
          })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropDown;
