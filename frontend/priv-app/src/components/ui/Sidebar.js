import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../logo/Logo'

export const Sidebar = () => {
    return (
        <aside className='sidebar-width h-full box-border p-4'>
            <Logo />
            <ul className='list-none text-gray-300'>
                <li>
                    <NavLink 
                        className='font-bold text-base' 
                        to="/payment"
                        activeClassName='text-white'
                    >
                        <i className="fas fa-plus-circle mr-1"></i> Create a new payment 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='font-bold text-base' 
                        to="/payments"
                        activeClassName='text-white'    
                    >
                        <i className="fas fa-list-alt mr-1"></i> List payments
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
