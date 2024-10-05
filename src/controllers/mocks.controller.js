import { generatePet } from "../mocks/petsMocks.js";
import { generateUser } from "../mocks/usersMocks.js";
import { petsService, usersService } from "../services/index.js";

const generatePets = (req, res) => {
    const petsNumber = req.query.num || 50;
    
    if(isNaN(petsNumber) || petsNumber < 1) {
        return res.status(400).send({status: 'error', error: 'Valor invalido'});
    };

    const pets = generatePets(petsNumber);

    res.status(200).json(pets);

};

const  generateUsers = async (req,res) =>{
    const usersNumber = req.query.num || 50;

    if(isNaN(usersNumber) || usersNumber < 1){
        return res.status(400).send({status:'error', error: 'Valor invalido'});
    }

    const users = await generateUser(usersNumber);

    res.status(200).json(users);
};

const generateData = async(req, res) => {

    const usersNumber = req.params.users;
    const petsNumber = req.params.pets;

    try {

        if(isNaN(usersNumber) || usersNumber < 1 && isNaN(petsNumber) || petsNumber < 1){
            return res.status(400).send({status:'error', error: 'Valor invalido'});
        }

        const users = await generateUser(usersNumber);
        const pets =  await generatePet(petsNumber);

        const userResponse = await usersService.create(users);
        const petResponse = await petsService.create(pets);

        res.status(200).send({ status: 'success', payload: {users,pets} });

        
    } catch (error) {
        console.log(error);
    }
}

export default {
    generateData,
    generatePets,
    generateUsers
}