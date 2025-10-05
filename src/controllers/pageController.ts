import { Request, Response, RequestHandler } from "express";

export const home: RequestHandler = (req: Request, res: Response) => {
    res.send("Home")
}

export const dogs: RequestHandler = (req: Request, res: Response) =>{
    res.send("Dogs")
}

export const cats: RequestHandler = (req: Request, res: Response) => {
    res.send("Cats")
}

export const fishes: RequestHandler = (req: Request, res: Response) => {
    res.send("Fishes")
}