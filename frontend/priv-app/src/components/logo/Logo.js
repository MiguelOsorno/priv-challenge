import React from 'react'
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to='/'>
            <div className='p-4 lg:p-8 bg-purple-500 flex justify-start lg:justify-evenly items-center cursor-pointer'>
                <p className='text-2xl text-white font-bold font-sans'>Priv App</p>
                <i className="fas fa-user-lock fa-2x text-white"></i>
            </div>
        </Link>
    )
}
