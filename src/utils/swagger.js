import {dirname} from 'path';
import __dirname from './index.js';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentacion de nuestros endpoint de adoptme',
            description: 'Api pensada para los endpoints de adoptme'
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}

export default swaggerOptions;