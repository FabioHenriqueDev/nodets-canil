import { Request, Response, RequestHandler } from "express";

export const search: RequestHandler = (req, res) => {
    res.send('Search')
} 