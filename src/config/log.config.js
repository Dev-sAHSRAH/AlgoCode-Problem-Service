const winston = require('winston');
const {LOG_DB_URL} = require('./server.config');

require('winston-mongodb');

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.File({
    dirname: 'logs',
    filename: 'app.log'
}));

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    collection: 'logs',
    capped: false,
    expireAfterSeconds: 2592000, //TTL of 30days for log documents
    leaveConnectionOpen: false, //close the MongoDB connection after logging
}))

const logger = winston.createLogger({
    // default formatting
    format : winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM_DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`),
    ),
    transports: allowedTransports
})

module.exports = logger;