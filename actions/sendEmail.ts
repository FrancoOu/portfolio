"use server";

import {Resend} from 'resend';
import { getErrorMessage, validateString } from '../lib/utils';
import ContactFormEmail from '../email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.EMAIL_API_KEY);




export const sendEmail = async (formData: FormData) => {
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateString(email)){
        return {
            error: "Invalid email"
        }
    }

    if (!validateString(message)){
        return {
            error: "Invalid message"
        }
    }
    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'franco52048@gmail.com',
            reply_to: email as string,
            subject: 'Message from contact form',
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: email as string
            })
        })
    }
    catch (error){
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
    
}