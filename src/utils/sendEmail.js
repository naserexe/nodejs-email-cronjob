// This an example of implementing real email sending.
// It might needs to be changes or use something else depending on the requirements
import nodemailer from 'nodemailer';
import config from '../config/index.js';

const sendEmail = async (options, isSimulated) => {
  try {
    // Simulated email sending, if `isSimulated` is truthy value
    if (isSimulated) {
      console.log(`
      From: ${options.from}
      To: ${options.to}
      Subject: ${options.subject}
      Text: ${options.text}
      `);

      return;
    }

    const { host, port, user, pass, from } = config.smtp;
    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user: user,
        pass: pass,
      },
    });

    const message = {
      from, // sender address
      to: options.to,
      subject: options.subject,
      text: options?.text,
    };
    const response = await transporter.sendMail(message);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
