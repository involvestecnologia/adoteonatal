if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('@glimpse/glimpse').init();
}

require('dotenv').config();

const debug = require('debug')('app');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const util = require('util');
const EventEmitter = require('events');

debug('bootstrapping application');

const config = require('./config');
const routes = require('./routes');

util.inherits(express, EventEmitter);

module.exports = (port) => {
  const app = express();

  app.use(morgan(config.env.HTTP_LOG_CONFIG, { stream: config.logger.stream }));
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(config.passport.initialize());
  app.use(routes);

  const listen = () => new Promise((resolve, reject) => {
    port = port || config.env.PORT;

    const server = app.listen(port, (err) => {
      /* istanbul ignore next */
      if (err) return reject(err);
      resolve(server);
    });
  });

  return config.mongoose
    .then(listen);
};

