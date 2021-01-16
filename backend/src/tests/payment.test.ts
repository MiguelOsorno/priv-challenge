import axios from 'axios';

describe('Payment', () => {
    
    test('Get all payments', async() => {
        const payments = await axios.get('http://localhost:3000/api/v1/payments');
        expect( payments.status ).toBe(200);        
    })

    test('Create a new payment', async() => {
        const payments = await axios.post('http://localhost:3000/api/v1/payments', {
            creatorId: "33773",
            kind: "SUBSCRIPTION",
            amountValue: 3000,
            status: "PAID",
            provider: "STRIPE",
            providerId: "3643543"
        });
        expect( payments.status ).toBe(201);        
    })
    

})

