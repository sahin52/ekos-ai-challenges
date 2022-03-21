import Book from "@/model/book";
import { Request } from 'express';



export async function recommend(req: Request) {
    let res = await Book.aggregate().sample(Math.floor(Math.random()*4+2));
    console.log(res);
    return res;
}