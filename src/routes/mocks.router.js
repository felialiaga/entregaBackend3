import { Router } from "express";
import mocksController from '../controllers/mocks.controller.js';
import { faker } from "@faker-js/faker";

const router = Router();


router.get('/mockingPets', mocksController.generatePets);
router.get('/mockingUsers', mocksController.generateUsers);
router.post('/generateData/:users/:pets', mocksController.generateData);

router.get('/testUser', (req, res) => {
    const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password
    };

    res.send(user)

})



export default router;