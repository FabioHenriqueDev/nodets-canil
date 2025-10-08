import { Router } from 'express';
import * as pageController from '../controllers/pageController.js'
import * as searchController from '../controllers/searchController.js'

const router = Router();

router.get('/', pageController.home)
router.get('/dogs', pageController.dogs)
router.get('/cats', pageController.cats)
router.get('/fishes', pageController.fishes)

router.get('/search/:q', searchController.search)


export default router;