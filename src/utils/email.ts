import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const NOTIFICATION_TEMPLATE_ID = import.meta.env
  .VITE_EMAIL_NOTIFICATION_TEMPLATE;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAIL_AUTOREPLY_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const sendEmails = async (formData: {
  first_name: string;
  last_name: string;
  email: string;
  parish: string;
  subject: string;
  message: string;
}) => {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",

    // ❌ Don't add Content-Type here.
    // It causes a CORS preflight (OPTIONS) request.

    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Apps Script failed.");
  }

  return result;

  // EmailJS is no longer required because Apps Script sends both emails.

  // await emailjs.send(
  //   SERVICE_ID,
  //   NOTIFICATION_TEMPLATE_ID,
  //   formData,
  //   PUBLIC_KEY
  // );

  // await emailjs.send(
  //   SERVICE_ID,
  //   AUTOREPLY_TEMPLATE_ID,
  //   formData,
  //   PUBLIC_KEY
  // );
};
