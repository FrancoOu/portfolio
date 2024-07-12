'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import CustomisedVerticalComponent from './customised-vertical-element';

export default function Experience() {

    const {ref} = useSectionInView({
        sectionName: 'Experience',
        threshold: 0.5
      });
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-32'>
        <SectionHeading>My Experience</SectionHeading>    
        <VerticalTimeline lineColor='' >
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <CustomisedVerticalComponent {...experience} />
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
