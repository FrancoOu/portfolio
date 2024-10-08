'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
type ProjectProps = {
    title: string,
    description: string,
    tags: string[],
    imageUrl: string
}

export default function Project({
    title,
    description,
    tags,
    imageUrl
}:ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['0 1', '1.33 1'],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.5, 1])


return (
    <motion.div 
        ref={ref}  
        style={{
            scale: scaleProgress,
            opacity: opacityProgres
        }}
        className='group'
        >
        <section 
        className='relative bg-[#a8b4c727] max-w-[42rem] border border-black/5 overflow-hidden rounded-3xl sm:pr-8 sm:h-[20rem] sm:group-even:pl-8 hover:bg-[#a8b4c761] transition shadow-lg'>
                <div className='py-4 px-5 sm:pr-2 sm:pt-5 sm:pl-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                                {tags.map((tag, index)=>(
                                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                                ))}
                        </ul>
                </div>
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    width={500} 
                    height={100} 
                    className='absolute hidden sm:block top-8 -right-40 w-[29.25rem] rounded-t-lg shadow-2xl 
                    group-even:right-[initial] group-even:-left-40
                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                    group-hover:scale-105
                    transition
                    '
                />
        </section>
    </motion.div>
)
}
