const mongoose = require('mongoose');
const { Schema } = mongoose;

let kindTypes = {
    values: ['SUBSCRIPTION', 'SUBSCRIPTION_RENEW', 'TIP', 'POST'],
    message: '{VALUE} no es un kind valido',
};

let amountCurrencyCodeType = {
    values: ['USD'],
    message: '{VALUE} no es un tipo de moneda valido',
}

let statusTypes = {
    values: ['PAID', 'REFUNDED'],
    message: '{VALUE} no es un status valido',
}

let providerTypes = {
    values: ['STRIPE', 'CONEKTA'],
    message: '{VALUE} provider no valido',
}

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
        enum: kindTypes,
    },
    amountCurrencyCode: {
        type: String,
        default: 'USD',
        required: true,
        enum: amountCurrencyCodeType,
    },
    amountValue: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'PAID',
        enum: statusTypes,
    },
    provider: {
        type: String,
        required: true,
        enum: providerTypes,
    },
    providerId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Payment', paymentSchema);