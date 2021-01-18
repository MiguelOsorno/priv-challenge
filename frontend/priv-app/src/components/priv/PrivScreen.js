import React from 'react'
import { Switch, Route } from "react-router-dom";

import { CreatePayment } from '../payment/CreatePayment';
import { Footer } from '../ui/Footer';

import { Sidebar } from '../ui/Sidebar';
import { InitialMessage } from './InitialMessage';

export const PrivScreen = () => {
    return (
        <>
            <div className='flex h-screen pb-10 bg-purple-500 bg-opacity-100'>
                
                <Sidebar />

                <div className='w-full bg-gray-100 p-4'>
                    <Switch>
                        <Route path='/' exact component={ InitialMessage } />
                        <Route path='/payment' exact component={ CreatePayment } />
                    </Switch>
                </div>

                <Footer />
            </div>
            
        </>
    )
}
