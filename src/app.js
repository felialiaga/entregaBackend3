import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import __dirname from './utils/index.js';


import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import config from './config/config.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerOptions from './utils/swagger.js';
import addLogger from './middlewares/logger.middleware.js';
import logger from './utils/logger.js';

const app = express();
const PORT = config.app.PORT;
const connection = mongoose.connect(config.mongo.URL);



app.use(express.json());
app.use(cookieParser());

app.use(addLogger)

const spec = swaggerJSDoc(swaggerOptions);

app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec))

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter); 


export const appListen = () => {
    app.listen(PORT,()=> logger.info(`Listening on ${PORT}`));
}