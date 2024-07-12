import React, { ReactElement } from 'react'
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

type CustomisedVerticalComponentProps = {
        title: string;
        location: string;
        description: ReactElement;
        date: string;
        icon: React.ReactNode;
}

export default function CustomisedVerticalComponent({title, location, description, date, icon}: CustomisedVerticalComponentProps) {

    const {ref, inView} = useInView({
        threshold: 0.6,
        triggerOnce: true,
      });
  return (
        <VerticalTimelineElement
            visible={inView}
            // className="vertical-timeline-element--work"
            contentStyle={{ 
                background: '#a8b4c727', 
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                borderRadius: '1.5rem'
                }}
            contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af'
            }}
            dateClassName='sm:mx-10'
            date={date}
            icon={icon}
            iconStyle={{
                background: '#d2dcec',
                // fontSize: '20rem',
            }}

    >
        <h3 ref={ref} className="font-semibold capitalize" >{title}</h3>
        <p className='font-normal !mt-0' >{location}</p>
        <p className='!mt-1 !font-normal text-gray-700' ><>{description}</></p>
        
        </VerticalTimelineElement>
  )
}
