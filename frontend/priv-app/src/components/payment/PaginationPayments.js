import React from 'react'

export const PaginationPayments = ({ currentPage, totalPages, handlePrevPage, handleNextPage  }) => {
    return (
        <div className='flex items-center justify-end mt-6 w-full'>
            <button
                onClick={ handlePrevPage }
                disabled={ currentPage === 1 } 
                className={ ( currentPage === 1 ) ? 'bg-purple-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} 
                type="button">
                Prev
            </button>
            <button 
                onClick={ handleNextPage }
                disabled={ currentPage === totalPages }
                className={ ( currentPage === totalPages ) ? 'bg-purple-500 ml-1 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-purple-600 ml-1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} 
                type="button">
                Next
            </button>
        </div>
    )
}
