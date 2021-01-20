import React from 'react'
import { Switch, Route } from "react-router-dom";

import { CreatePayment } from '../payment/CreatePayment';
import { ListPayments } from '../payment/ListPayments';
import { Footer } from '../ui/Footer';

import { Sidebar } from '../ui/Sidebar';
import { InitialMessage } from './InitialMessage';
import { MenuMobile } from '../ui/MenuMobile';
import { Logo } from '../logo/Logo';

export const PrivScreen = () => {
    return (
        <>
            <div className='flex h-screen pb-16 lg:pb-10 bg-purple-500 bg-opacity-100'>
                
                <Sidebar />

                <div className='w-full bg-gray-100 overflow-y-auto'>
                    <div className='lg:hidden' >
                        <Logo />
                    </div>
                    <div className='shadow bg-white px-8 py-6 m-4'>
                        <Switch>
                            <Route path='/' exact component={ InitialMessage } />
                            <Route path='/payment' exact component={ CreatePayment } />
                            <Route path='/payments' exact component={ ListPayments } />
                        </Switch>
                    </div>
                </div>

                <MenuMobile />

                <Footer />
            </div>
            
        </>
    )
}
