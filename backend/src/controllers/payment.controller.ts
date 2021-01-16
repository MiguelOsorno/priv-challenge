import { Request, Response } from "express";
import { Payment, IPayment } from '../models/payment.model';

export function getPayments ( req: Request, res: Response) {

    let limit = req.query.limit || 10;
    let from = req.query.from || 0;

    Payment.find({})
            .sort({ createdAt: 'desc' })
            .limit(limit)
            .skip(from)
            .exec( (err: any, payments: IPayment) => {

                if(err){
                    return res.status(500).json({
                        ok: false,
                        err,
                    })
                }
                
                Payment.count({}, (err: any, total: number) => {
                    
                    if(err){
                        return res.status(500).json({
                            ok: false,
                            message: 'Internal server error'
                        })
                    }

                    res.status(200).json({
                        ok: true,
                        payments,
                        total
                    })
                })
            })
}

export function createPayment (req: Request, res: Response) {

    let body = req.body;

    if(body.creatorId === undefined){
        return res.status(400).json({
            ok: false,
            message: 'creatorId es necesario',
        })
    }

    if(body.kind === undefined){
        return res.status(400).json({
            ok: false,
            message: 'el kind es necesario',
        })
    }

    if(body.amountValue === undefined || isNaN(parseInt(body.amountValue)) ){
        return res.status(400).json({
            ok: false,
            message: 'el amountValue es requerido y de tipo number',
        })
    }

    if(body.provider === undefined){
        return res.status(400).json({
            ok: false,
            message: 'el provider es requerido',
        })
    }

    if(body.providerId === undefined){
        return res.status(400).json({
            ok: false,
            message: 'providerId es requerido',  
        })
    }

    let payment = new Payment({
        creatorId : body.creatorId,
        kind: body.kind,
        status: body.status || 'PAID', 
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

        res.status(201).json({
            ok: true,
            payment: paymentDB as IPayment,
        })

    })

    
}

