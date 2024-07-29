'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '../../lib/hooks';
import { useActiveSectionContext } from '../../context/active-section-context';


export default function Intro() {

    const {ref} = useSectionInView({
        sectionName: 'Home',
        threshold: 0.5
      });

    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <section className='mb-14 sm:mb-28 max-w-[50rem] text-center scroll-mt-[100rem]' id='home' ref={ref}>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                    initial={{opacity:0, scale: 0}}
                    animate={{opacity:1, scale: 1}}
                    transition={{
                        type: 'tween',
                        duration: '0.25'
                    }}
                >
                    <Image 
                    src="/avatar.jpg" 
                    alt='Franco Portrait' 
                    width='192'
                    height='192'
                    quality='100'
                    className='h-24 w-24 rounded-full 
                    border-[0.35rem] 
                    border-white shadow-xl
                    object-cover
                    '
                    />
                    <span className='text-4xl absolute bottom-0 right-0 '>
                        ☕️
                    </span>
                </motion.div>
            </div>
        </div>
        <motion.p 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        className='mt-4 mb-10 px-4 text-2xl font-medium sm:text-4xl !leading-[1.5] dark:text-[#d3d0d0fb]'>
            Hello, I&apos;m <span className='font-bold'>Franco Ou</span>, a recent IT graduate student at the <span className='font-bold'>University of Melbourne</span>  with a strong background in software development. 
            I specialise in full-stack development using <span className='font-bold underline'>MERN</span> stack (MongoDB, Express.JS, React.JS, Node.JS).
        </motion.p>

        <motion.div 
            className='flex sm:flex-row flex-col items-center justify-center gap-4'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.2
            }}
            >

            <Button asChild className='border rounded-full gap-2 px-8 w-[12rem]' onClick={()=>{
                setActiveSection('Contact');
                setTimeOfLastClick(Date.now());
            }}>
                <Link href='#contact' className='group' >
                    CONTACT ME <BsArrowRight className='group-hover:translate-x-1 transition'/>
                </Link>
            </Button>


            <Button asChild variant='secondary' className='group border rounded-full gap-2 px-8 w-[12rem] '>
                    <Link href='https://franco-s-resume.netlify.app/' target="_blank" rel="noopener noreferrer">

                        DOWNLOAD CV <HiDownload className='group-hover:translate-y-1 transition scale-[5]'/>
                    </Link>
            </Button>

            <Button asChild variant='secondary' className='border p-3 items-center rounded-full hover:scale-[1.5] '>
                <Link rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/franco-ou-408b6a1ba/'>
                    <BsLinkedin/>
                </Link>
            </Button>

            <Button asChild variant='secondary' className='border p-3 items-center rounded-full hover:scale-[1.5] '>
                <Link rel="noopener noreferrer" target="_blank" href='https://www.github.com/francoou'>
                    <BsGithub/>
                </Link>
            </Button>
       </motion.div>

    </section>
  )
}
