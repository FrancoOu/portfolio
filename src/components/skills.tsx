'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import { delay, motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i: number)=> ({
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.03 * i
        }
    })

}


export default function Skills() {

    const {ref} = useSectionInView({
        sectionName: 'Skills',
        threshold: 0.5
      });

  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 sm:text-lg text-sm text-gray-800'>
            {
                skillsData.map((skill, i) => (
                    <motion.li 
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true
                    }}
                    custom={i}
                    key={i} className='bg-[#d8dadb33] border border-black/[0.1] rounded-xl px-5 py-3'>
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
