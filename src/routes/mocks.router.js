import { Router } from "express";
import mocksController from '../controllers/mocks.controller.js';

const router = Router();


router.get('/mockingPets', mocksController.generatePets);
router.get('/mockingUsers', mocksController.generateUsers);
router.post('/generateData/:users/:pets', mocksController.generateData);



export default router;