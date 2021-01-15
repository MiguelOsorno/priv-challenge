import { Request, Response } from "express";
import { Payment, IPayment } from '../models/payment.model';

export function getPayments ( req: Request, res: Response) {

    let limit = req.query.limit || 10;
    let from = req.query.from || 0;
    limit = Number(limit);
    from = Number(from);

    Payment.find({})
            .sort({ createdAt: 'desc' })
            .limit(limit)
            .skip(from)
            .exec( (err: any, payments: IPayment) => {

                if(err){
                    return res.status(400).json({
                        ok: false,
                        err,
                    })
                }
                
                Payment.count({}, (err: any, total: number) => {
                    res.json({
                        ok: true,
                        payments,
                        total
                    })
                })
            })
}

export function createPayment (req: Request, res: Response) {

    let body = req.body;

    let payment = new Payment({
        creatorId : body.creatorId,
        kind: body.kind,
        amountValue: body.amountValue,
        provider: body.provider,
        providerId: body.providerId,
    });

    payment.save( (err: any, paymentDB: any) => {

        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            payment: paymentDB as IPayment,
        })

    })

    
}

