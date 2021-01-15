import mongoose from 'mongoose';
const { Schema, } = mongoose;

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
        enum:['SUBSCRIPTION', 'SUBSCRIPTION_RENEW', 'TIP', 'POST'],
        cast:'{VALUE} no es un kind valido'
    },
    amountCurrencyCode: {
        type: String,
        default: 'USD',
        required: true,
        enum: ['USD'],
        cast: '{VALUE} no es un tipo de moneda valido'
    },
    amountValue: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'PAID',
        enum: ['PAID', 'REFUNDED'],
        cast: '{VALUE} no es un status valido'
    },
    provider: {
        type: String,
        required: true,
        enum: ['STRIPE', 'CONEKTA'],
        cast: '{VALUE} provider no valido'
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