import { Request, Response, RequestHandler } from "express";
import { createMenuObject } from '../helpers/createMenuObject.js';
import { Pet } from '../models/pet.js'

export const home: RequestHandler = (req: Request, res: Response) => {
    let list = Pet.getAll()
    console.log(list)
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs: RequestHandler = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog')
    console.log(list)
    res.render("pages/page", {
        menu: createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats: RequestHandler = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    console.log(list)
    res.render("pages/page", {
        menu: createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
}

export const fishes: RequestHandler = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    console.log(list)
      res.render("pages/page", {
        menu: createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
}