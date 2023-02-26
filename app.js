const express = require('express');
const app = express();
const winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});



app.listen(3000, () => {
    logger.log({
        level: 'info',
        message: 'Server started on port 3000'
    });
});