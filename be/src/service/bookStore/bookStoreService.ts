import * as bookStoreService from '@/service/bookStore/bookStoreService';
import Book from "@/model/book";
import { Request } from 'express';



export async function getAll(req: Request) {
    let res = await Book.find({});
    console.log(res);
    return res;
}
export async function create(req: Request) {
    console.log(req);
    console.log(req.body.name);
    let res = await Book.create({name: req.body.name,
        category: req.body.category,
        sellCount: req.body.sellCount,
        price_cent: req.body.price_cent
    })
    return res;
}

export async function update(req: Request) {
    let res = await Book.updateOne({_id:req.body._id},{name: req.body.name,
        category: req.body.category,
        sellCount: req.body.sellCount,
        price_cent: req.body.price_cent
    });
    console.log(res);
    return res;
}

export async function Delete(req: Request) {
    let res = await Book.deleteOne({_id:req.body._id});
    return res;
    // throw new Error('Function not implemented.');
}

