import nodemailer from "nodemailer"
import dotenv from 'dotenv'
import { contactSchema } from "../validators/contact.validator.js";
dotenv.config()

export const sendContactForm = async (req, res) => {
  const { data, error } = contactSchema.safeParse(req.body)

  if (error) {
    const errors = error.issues[0].message;
    return res.json({error : errors})
  }

  try {
    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      service: "gmail",
      // port: 465,       //if host is explicity provided
      // secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL,      // Your email
        pass: process.env.CONTACT_EMAIL_PASS, // App password or real password
      },
    });

    const mailOptions = {
      from: `${data.name} <${process.env.CONTACT_EMAIL}>`,
      replyTo: data.email,
      to: process.env.CONTACT_EMAIL, // Where you want to receive submissions
      subject: `Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
    // res.redirect('/getintouch')
    console.log("Email sent Successfully")
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
};