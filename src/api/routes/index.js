// Importing routes files
import customerRoutesV1 from '../v1/modules/customer/customerRoutes.js';

// Configure and exports all routes from here
const configureAllRoutes = (app) => {
  customerRoutesV1(app);
};

export default configureAllRoutes;
