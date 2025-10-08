import { Request, Response, RequestHandler } from "express";
import { Pet } from '../models/pet.js'
import { createMenuObject } from '../helpers/createMenuObject.js'

export const search: RequestHandler = (req, res) => {
    let query: string = req.query.q as string;
    if (!query){
        return res.redirect('/')
    }
    console.log(query)
    let list = Pet.getFromName(query)
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
    });
} 