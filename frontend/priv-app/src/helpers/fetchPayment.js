
const URL_API = 'http://localhost:4000/api/v1';

export const createPayment = async( payment ) => {

    return await fetch(`${ URL_API }/payments`, {
        method: 'POST',
        body: JSON.stringify(payment),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

