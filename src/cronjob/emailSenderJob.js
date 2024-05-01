import cron from 'node-cron';
import sendEmail from '../utils/sendEmail.js';
import { findBirthdayCustomersService } from '../api/v1/modules/customer/customerServices.js';
import { EMAILER_CRON_EXPR } from '../constants/index.js';

const startEmailSenderCronJob = () => {
  cron.schedule(EMAILER_CRON_EXPR, async () => {
    try {
      const customers = await findBirthdayCustomersService();

      if (customers instanceof Error) {
        throw customers;
      }

      customers.forEach((customer) =>
        sendEmail(
          {
            to: customer.email,
            subject: 'Birthday wish',
            from: 'ABC company',
            text: `Happy birthday ${customer.name}!🥳 🎊, Wishing you joy and laughter today and always.`,
          },
          true // This will send simulated email
        )
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export default startEmailSenderCronJob;
