import React from 'react';
import { NavLink } from 'react-router-dom';

export const MenuMobile = () => {
    return (
        <div className='block lg:hidden bg-gray-900 h-16 w-full flex justify-evenly items-center fixed bottom-0'>
            <ul className='list-none text-gray-300 h-full w-full flex justify-evenly items-center items-center mx-0 sm:mx-20'>
                 <li>
                    <NavLink 
                        className='font-bold text-base' 
                        to="/"
                        exact
                        activeClassName='text-white'
                    >
                        <i className="fas fa-house-user fa-2x fa-3x"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='font-bold text-base' 
                        to="/payment"
                        activeClassName='text-white'
                    >
                        <i className="fas fa-plus-circle fa-3x"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='font-bold text-base' 
                        to="/payments"
                        activeClassName='text-white'    
                    >
                        <i className="fas fa-list-alt fa-3x mr-1"></i>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
