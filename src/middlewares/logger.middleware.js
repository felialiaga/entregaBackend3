import logger from "../utils/logger.js";

const addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.info(`${req.method} at ${req.url} - ${Date().toLocaleString()}`)
    next()
}

export default addLogger