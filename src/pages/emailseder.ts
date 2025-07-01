// src/utils/emailSender.ts
import emailjs from '@emailjs/browser';

export const sendEmail = async (form: HTMLFormElement) => {
  const SERVICE_ID = 'service_26uk2er';     // replace with your EmailJS service ID
  const TEMPLATE_ID = 'template_nc5458v';   // replace with your template ID
  const PUBLIC_KEY = 'whCDwFqkZodsouRFz';     // replace with your EmailJS public key

  try {
     console.log(form,10)
    const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
    console.log('Email sent:', result.text);
    alert('Email sent successfully!');
    
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Failed to send email.');
  }
};
