import express from 'express';

import handleValidation from '../../../../middlewares/reqValidation.js';
import { createCustomer } from './customerController.js';
import { customerValidation } from './customerValidator.js';

// Initialize express router
const router = express.Router();

// Routes handler
router
  .route('/register')
  .post(handleValidation(customerValidation), createCustomer);

// Configuring and exporting all routes
const configure = (app) => {
  app.use('/api/v1/customer', router);
};

export default configure;
