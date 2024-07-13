'use client';
import { Fragment, useEffect, useState } from "react"
import { useActiveSectionContext } from "../../context/active-section-context";
import { motion } from "framer-motion";

export default function BackToTopButton() {

    const [show, setShow] = useState(false);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    });

    return (
        <Fragment>
            {
                (show) ? (
                    <motion.div className="fixed bottom-0 right-0 mb-6 mr-6 z-10"
                    initial={{opacity: 0, y:-100, scale: 0}}
                    animate={{opacity: 1, y:0, scale: 1}}
                    >
                    <a href="#home" onClick={()=>{
                        setActiveSection('Home')
                        setTimeOfLastClick(Date.now());
                        }}>
                        <button className="bg-black text-white rounded-full p-2 hover:bg-gray-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </a>
                </motion.div>
                ) : (<Fragment/>)
            }
        </Fragment>
    )
}