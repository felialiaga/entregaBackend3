import { appListen } from "./src/app.js";
import cluster from 'cluster'
import { cpus } from "os";
import logger from "./src/utils/logger.js";


const numberOfProcess = cpus().length;


if (cluster.isPrimary) {
    logger.info('Proceso primario, generando un worker');
    for (let i = 0; i < numberOfProcess; i++) {
        cluster.fork();
    }
    cluster.on('message', worker => {
        logger.info(`Mensaje recibido del worker ${worker.process.pid}`);
    })
} else {
    // console.log('Al ser un proceso forkeado no cuenta como primario');
    // console.log(`Proceso hijo con id ${process.pid}`);
    appListen();
}
