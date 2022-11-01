import swaggerJsdoc from 'swagger-jsdoc';
import yaml from 'js-yaml';
import fs from 'fs';
import logger from '../globals.js';

const swaggerSpecs = () => {
  let schemas;
  try {
    schemas = yaml.load(fs.readFileSync('./src/schemas.yml', 'utf8'));
  } catch (e) {
    logger.error(e);
  }

  const options = {
    definition: {
      openapi: '3.0.3',
      swagger: '3.0.3',
      info: {
        title: 'TRG Production API',
        version: '1.0',
        description: 'This is the TRG production service API documentation',
        license: {
          name: 'MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
      },
      servers: [
        {
          url: 'http://localhost:5000/',
          description: 'local server',
        },
      ],
      components: {
        schemas,
      },
    },
    schemes: ['http'],
    apis: ['./src/routes/*.ts'],
  };

  return swaggerJsdoc(options);
};

export default swaggerSpecs;
