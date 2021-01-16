import mongoose from 'mongoose';
const { Schema, } = mongoose;

let kindEnum = ['SUBSCRIPTION', 'SUBSCRIPTION_RENEW', 'TIP', 'POST'];

let amountCurrencyCodeEnum = ['USD'];

let statusEnum = ['PAID', 'REFUNDED'];

let providerEnum = ['STRIPE', 'CONEKTA'];

const paymentSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    creatorId: {
        type: String,
        required: true,
    },
    kind: {
        type: String,
        required: true,
        validate: {
            validator: (value:any) => kindEnum.includes( value ),
            message: props => `${props.value} no es un kind valido` ,
            isAsync:false
        }
    },
    amountCurrencyCode: {
        type: String,
        default: 'USD',
        required: true,
        validate: {
            validator: (value: any) => amountCurrencyCodeEnum.includes( value ),
            message: props => `${props.value} no es un tipo de moneda valido` ,
            isAsync:false
        }
    },
    amountValue: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'PAID',
        validate: {
            validator: (value: any) => statusEnum.includes( value ),
            message: props => `${props.value} no es un status valido` ,
            isAsync:false
        }
    },
    provider: {
        type: String,
        required: true,
        validate: {
            validator: (value:any) => providerEnum.includes( value ),
            message: props => `${props.value} provider no valido` ,
            isAsync:false
        }
    },
    providerId: {
        type: String,
        required: true,
    }
});

export const Payment = mongoose.model('Payment', paymentSchema);

export interface IPayment {
    createdAt?: Date,
    creatorId: string,
    kind: string,
    amountCurrencyCode?: string,
    amountValue: number,
    status?: string,
    provider: string,
    providerId: string
}