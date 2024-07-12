'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../../lib/hooks';
import { sendEmail } from '../../actions/sendEmail';
import FormButton from './form-button';
import { useToast } from './ui/use-toast';
import { FaCheckCircle } from 'react-icons/fa';
export default function Contact() {

    const {ref} = useSectionInView({
        sectionName: 'Contact',
        threshold: 0.5
      });
    
    const { toast } = useToast();

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    transition={{
        duration: 0.7
    }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contact me at <a className='underline' href='mailto:franco52048@gmail.com'>franco52048@gmail.com</a> or through this form.</p>

        <form className='mt-10 flex flex-col' action={async (formData)=>{
            const {error, data} = await sendEmail(formData);

            if (error) {
                console.error(error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: error as string,
                })
            }else{
                toast({
                    action: <div className='flex items-center w-full gap-x-3'>Message sent {<FaCheckCircle color='green'  />}</div>,
                })
            }
        }}>
            <input className='h-14 rounded-lg border border-black/10 px-4' type='email' placeholder='Your Email' required maxLength={500} name='email'/>
            <textarea className='h-52 my-3 rounded-lg border border-black/10 p-4' placeholder='Message' required maxLength={500} name='message' />
            <FormButton
            />
        </form>
    </motion.section>
  )
}
