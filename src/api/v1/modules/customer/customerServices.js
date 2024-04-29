import CustomerModel from '../../../../database/models/customerModel.js';

export const createCustomerService = async (customerInfo) => {
  try {
    const newCustomer = await CustomerModel.create(customerInfo);
    return newCustomer;
  } catch (error) {
    console.log(error);
    return error;
  }
};
