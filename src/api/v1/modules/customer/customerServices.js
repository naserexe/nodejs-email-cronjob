import CustomerModel from '../../../../database/models/CustomerModel.js';

export const createCustomerService = async (customerInfo) => {
  try {
    const newCustomer = await CustomerModel.create(customerInfo);
    return newCustomer;
  } catch (error) {
    return error;
  }
};

export const findCustomerService = async (query) => {
  try {
    const customers = await CustomerModel.find(query);
    return customers;
  } catch (error) {
    return error;
  }
};

export const findBirthdayCustomersService = async (date) => {
  try {
    const birthday = date ? new Date(date) : new Date(); // If no custom date passed, using today's date as default as per requirements
    const customers = await CustomerModel.find({
      $expr: {
        $and: [
          { $eq: [{ $dayOfMonth: '$birthday' }, birthday.getDate()] },
          { $eq: [{ $month: '$birthday' }, birthday.getMonth() + 1] }, // + 1 because months are zero-based in JavaScript Date objects
        ],
      },
    });
    return customers;
  } catch (error) {
    return error;
  }
};

export const customerModelAggregate = async (aggPipeline) => {
  try {
    const customers = await CustomerModel.aggregate(aggPipeline);
    return customers;
  } catch (error) {
    return error;
  }
};
