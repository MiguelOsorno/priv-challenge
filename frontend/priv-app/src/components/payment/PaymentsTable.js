import React from 'react'

import moment from 'moment';

import { creators } from '../../data/data';

export const PaymentsTable = ({ payments }) => {
    payments = payments.map( payment => {
        let creator = creators.filter( creator => payment.creatorId === creator.creatorId )[0];

        return { ...payment, creatorName: creator ? creator.name : undefined }
    })
    
    return (
        <>
            <table className="table-auto rounded w-full width-800">
                <thead>
                    <tr className='bg-gray-700'>
                        <th className='text-white font-medium border-gray-500'>Created At</th>
                        <th className='text-white font-medium border-gray-500'>Amount</th>
                        <th className='text-white font-medium border-gray-500'>Kind</th>
                        <th className='text-white font-medium border-gray-500'>Creator</th>
                        <th className='text-white font-medium border-gray-500'>Provider</th>
                        <th className='text-white font-medium border-gray-500'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map( (payment, index ) => (
                            <tr key={ payment._id } className={ ( index % 2 === 0 ) ? 'bg-gray-300' : 'bg-gray-100' }>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ moment( payment.createdAt ).format('D/MM/YYYY - h:mm:ss a') }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.amountValue }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.kind }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.creatorName || payment.creatorId }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.provider }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.status }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
