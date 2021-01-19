import React, { useEffect, useState, useRef } from 'react'
import { getPayments } from '../../helpers/fetchPayment';
import { PaginationPayments } from './PaginationPayments';
import { PaymentsTable } from './PaymentsTable';

export const ListPayments = () => {

    const isMounted = useRef(true);
    const [payments, setPayments] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ totalPages, setTotalPages] = useState(0);
    const [ from, setFrom] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const limit = 10;

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
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setLoading( true );
        getPayments(from)
            .then( resp => {
                if( isMounted.current ){
                    setLoading(false);
                    setPayments( resp.payments );
                    calTotalPages( resp.total );
                }
            })
            .catch( err => {
                if( isMounted.current ){
                    setLoading(false);
                }
            })
    }, [from])

    return (
        <>
            <div className='overflow-x-auto'>
                <h2 className='text-3xl font-semibold mb-4'>List payments</h2>
                {
                    ( loading && 
                        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                            <i className='ml-1 animate-spin fas fa-spinner'></i><p> Cargando...</p>
                        </div>
                    )   
                } 
                {
                    ( !loading && payments.length === 0 &&
                        <div className="bg-yellow-200 border-l-4 border-yellow-500 text-orange-700 p-4" role="alert">
                            <p className="font-bold">Not payments found</p>
                            <p>try creating one.</p>
                        </div>    
                    )
                }
                {
                    ( (!loading && payments.length > 0 ) &&   
                    <>
                            <PaymentsTable  payments={ payments } />  
                           
                    </>
                        
                    )
                }

            </div>

            <div>
                {
                     ( (!loading && payments.length > 0 ) && 
                        <PaginationPayments 
                            totalPages={ totalPages }
                            handleNextPage={ handleNextPage }
                            handlePrevPage={ handlePrevPage }
                            currentPage={ currentPage }
                        /> 
                     )
                }
            </div>
        </>
        
    )
}
