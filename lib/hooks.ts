import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";


export function useSectionInView({
    sectionName,
    threshold
}:{
    sectionName: string;
    threshold?: number;
}) {
    const {activeSection,setActiveSection, timeOfLastClick, initialLoad, setInitialLoad} = useActiveSectionContext();
    const {ref, inView} = useInView({
      initialInView: false,
      threshold: threshold
    });
  
    useEffect(()=>{
        if (inView && activeSection === 'Home' && initialLoad){
            setInitialLoad(false);
        }
        else if (inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection(sectionName);
        }
       
    }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {ref, inView}
}