import React, { useState } from 'react'

import { useForm } from '../../hooks/useForm'

import { creators } from '../../data/data';

import { createPayment } from '../../helpers/fetchPayment';

export const CreatePayment = () => {

    const [ paymentStatus , setPaymentStatus ] = useState({
        statusCode: 0,
        loading: false
    });

    const [ values, handleInputChange ] = useForm({
        kind: 'SUBSCRIPTION',
        amountValue: 0,
        provider: 'STRIPE',
        creatorId: creators[0].creatorId,
    });

    const { kind, amountValue, provider, creatorId } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaymentStatus({
            statusCode: 0,
            loading: true,
        })
        createPayment({ kind, amountValue, provider, creatorId, providerId: 535435435 })
                    .then( resp => {
                        setPaymentStatus({
                            statusCode: resp.status,
                            loading: false,
                        });
                    })
                    .catch( err => {
                        
                        setPaymentStatus({
                            statusCode: 500,
                            loading: false,
                        })
                    })
    }


    return (
        <div className='max-w-md'>
            <h2 className='text-3xl font-semibold mb-4'>Create a new payment</h2>
            <form onSubmit={ handleSubmit }>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold text-base mb-2'>Select Creator</label>
                    <select className='focus:outline-none py-2 px-3 w-full bg-gray-200' value={ creatorId } onChange={ handleInputChange } name="creatorId">
                        {
                            creators.map( creator => (
                                <option key={ creator.creatorId } value={ creator.creatorId }>{ creator.name }</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold text-base mb-2'>Select Kind</label>
                    <select className='focus:outline-none py-2 px-3 w-full bg-gray-200' value={ kind } onChange={ handleInputChange } name="kind">
                        <option value="SUBSCRIPTION">Subscription</option>
                        <option value="SUBSCRIPTION_RENEW">Subscription renew</option>
                        <option value="TIP">Tip</option>
                        <option value="POST">Post</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold text-base mb-2'>Amount</label>
                    <input className='focus:outline-none py-2 px-3 w-full bg-gray-200' type='number' name='amountValue' value={ amountValue } onChange={ handleInputChange } />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold text-base mb-2'>Select Provider</label>
                    <select className='focus:outline-none py-2 px-3 w-full bg-gray-200' value={ provider } onChange={ handleInputChange } name="provider">
                            <option value="STRIPE">STRIPE</option>
                            <option value="CONEKTA">CONEKTA</option>
                    </select>
                </div>
                <div className=''>
                    <button 
                        disabled={ paymentStatus.loading }
                        className={ ( paymentStatus.loading ) ? 'bg-purple-500 w-1/2 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-purple-600 w-1/2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type='submit'>
                        Enviar 
                        <i className={ paymentStatus.loading ? 'ml-1 animate-spin fas fa-spinner' : '' }></i>
                    </button>
                </div>
            </form>
            {
                ( paymentStatus.statusCode >= 400  &&     
                    <div className="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Opps </strong>
                        <span className="block sm:inline">payment failed</span>
                    </div>
                )   
            }
            {
                ( paymentStatus.statusCode === 201 && 
                    <div className="mt-8 bg-green-100 border border-green-500 text-green-500 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Payment created</strong>
                    </div>
                )
            }
        </div>
    )
}
