'use client';

import React, { use, useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';

export default function About() {

  const {ref} = useSectionInView({
    sectionName: 'About',
    threshold: 0.5
  });

  return (
    <motion.section 
    ref={ref}
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{
        delay: 0.325
    }}
    className='text-center mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-m-28'
    id='about'

    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3 sm:text-xl sm:leading-10'>
        I&apos;m a IT graduate student specialising in <span className='font-bold'>Computing at the University of Melbourne</span>. 
        I love coding, photography, and coffee. 
        I excel in full‐stack development using React.js and Next.js, armed with a robust understanding of the software development process. 
        I am enthusiastic about learning new tech tools and leveraging my skills and knowledge to fuel innovation and success within dynamic organisations.
        </p>
    </motion.section>
  )
}
