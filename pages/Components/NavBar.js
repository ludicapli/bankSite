import React from 'react'
import Image from 'next/image'

import { useState } from 'react';
import {close,menu, bill} from '../../public/assets';
import {navLinks} from "../../lib/constants"
import logo from '../../public/assets/logo.svg'

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-12 justify-between items-center navbar'>
      <Image src={logo} alt="hoobank" className='' width={124} height={32}/>
    
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-sm text-teal-400 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absoulte top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className='list-none flex justify-end items-center flex-1 flex-col'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-sm text-teal-400 ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>

                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar