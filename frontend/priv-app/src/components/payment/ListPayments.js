import React, { useEffect, useState } from 'react'
import { getPayments } from '../../helpers/fetchPayment';

export const ListPayments = () => {

    const [payments, setPayments] = useState([]);
    const [ totalPages, setTotalPages] = useState(0);
    const [ from, setFrom] = useState(0);
    const limit = 10;
    const [ currentPage, setCurrentPage ] = useState(1);

    const handleNextPage = () => {
        setFrom( from + limit );
        setCurrentPage( currentPage + 1 );
    }

    const handlePrevPage = () => {
        setFrom( from - limit );
        setCurrentPage( currentPage - 1 );
    }

    const calTotalPages = ( totalPayments ) => {
        const total = Math.ceil(totalPayments / limit);
        setTotalPages( total );
    }

    useEffect(() => {
        getPayments(from)
            .then( resp => {
                console.log( resp.total );
                setPayments( resp.payments );
                calTotalPages( resp.total );
            })
    }, [from])

    return (
        <div>
            <h2 className='text-3xl font-semibold mb-4'>List payments</h2>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>amountValue</th>
                        <th>kind</th>
                        <th>provider</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map( payment => (
                            <tr key={ payment._id } className="bg-purple-400 ">
                                <td className='text-white text-center px-4 py-2 border-blue-800 border'>{ payment.amountValue }</td>
                                <td className='text-white text-center px-4 py-2 border-blue-800 border'>{ payment.kind }</td>
                                <td className='text-white text-center px-4 py-2 border-blue-800 border'>{ payment.provider }</td>
                                <td className='text-white text-center px-4 py-2 border-blue-800 border'>{ payment.status }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button
                    onClick={ handlePrevPage }
                    disabled={ currentPage === 1 } 
                    className={ ( currentPage === 1 ) ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} 
                    type="button">
                    Anterior
                </button>
                <button 
                    onClick={ handleNextPage }
                    disabled={ currentPage === totalPages }
                    className={ ( currentPage === totalPages ) ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} 
                    type="button">
                    Siguiente
                </button>
            </div>
        </div>
    )
}
