import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const NOTIFICATION_TEMPLATE_ID = import.meta.env.VITE_EMAIL_NOTIFICATION_TEMPLATE;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAIL_AUTOREPLY_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;


export const sendEmails = async (formData: {
  first_name: string;
  last_name: string;
  email: string;
  parish: string;
  subject: string;
  message: string;
}) => {

  // Send email to YU4C Goa
  await emailjs.send(
    SERVICE_ID,
    NOTIFICATION_TEMPLATE_ID,
    formData,
    PUBLIC_KEY
  );


  // Send confirmation email to user
  await emailjs.send(
    SERVICE_ID,
    AUTOREPLY_TEMPLATE_ID,
    formData,
    PUBLIC_KEY
  );

};