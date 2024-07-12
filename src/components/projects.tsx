'use client';

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '../../lib/data'
import Project from './project'
import { useSectionInView } from '../../lib/hooks';
import { motion } from 'framer-motion';

export default function Projects() {

    const {ref} = useSectionInView({
        sectionName: 'Projects',
        threshold: 0.5
      });

    return (
        <motion.section
        id='projects'
        className='scroll-m-28 mb-28'
        ref={ref}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
        delay: 0.5
    }}
        >
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div className='flex flex-col gap-y-8' >
                {
                    projectsData.map((project,index)=>(
                        <React.Fragment key={index}>
                            <Project {...project} />    
                        </React.Fragment>
                    ))
                }
            </div>
        </motion.section>
  )
}
