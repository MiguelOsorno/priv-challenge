const Payment = require('../models/payment.model');

function createPayment ( req, res ) {

    let limit = 10;
    let from = req.query.from || 0;
    from = Number(from);

    Payment.find({})
            .limit(limit)
            .skip(from)
            .exec( (err, payments) => {

                if(err){
                    return res.status(400).json({
                        ok: false,
                        err,
                    })
                }
                
                Payment.count({}, (err, total) => {
                    res.json({
                        ok: true,
                        payments,
                        total
                    })
                })
            })
}

function getPayments (req, res) {

    let body = req.body;

    let payment = new Payment({
        creatorId : body.creatorId,
        kind: body.kind,
        amountValue: body.amountValue,
        provider: body.provider,
        providerId: body.providerId,
    });

    payment.save( (err, paymentDB) => {

        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            payment: paymentDB,
        })

    })

    
}

module.exports = {
    getPayments,
    createPayment
}