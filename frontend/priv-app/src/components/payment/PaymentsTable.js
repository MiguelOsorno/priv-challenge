import React from 'react'

import moment from 'moment';

export const PaymentsTable = ({ payments }) => {
    return (
        <>
            <table className="table-auto rounded w-full width-800">
                <thead>
                    <tr className='bg-gray-700'>
                        <th className='text-white font-medium border-gray-500'>createdAt</th>
                        <th className='text-white font-medium border-gray-500'>amountValue</th>
                        <th className='text-white font-medium border-gray-500'>kind</th>
                        <th className='text-white font-medium border-gray-500'>provider</th>
                        <th className='text-white font-medium border-gray-500'>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map( (payment, index ) => (
                            <tr key={ payment._id } className={ ( index % 2 === 0 ) ? 'bg-gray-300' : 'bg-gray-100' }>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ moment( payment.createdAt ).format('llll') }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.amountValue }</td>
                                <td className='text-gray-800 font-medium text-center px-4 py-2'>{ payment.kind }</td>
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
