import asyncHandler from '../../../../middlewares/asyncHandler.js';
import { createCustomerService } from './customerServices.js';

// @desc    Create customer
// @route   POST /v1/api/customer/register
// @access  Private
export const createCustomer = asyncHandler(async (req, res) => {
  const newCustomer = await createCustomerService(req.body);

  if (newCustomer instanceof Error) {
    throw newCustomer;
  }

  res.status(201).json({
    success: true,
    message: `New customer created successfully`,
    data: newCustomer,
  });
});
