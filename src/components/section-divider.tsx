'use client';

import React from 'react'
import { Separator } from './ui/separator'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            delay: 0.3
        }}
    >
        <Separator orientation="vertical" className="h-20 mb-[5rem] w-1 bg-stone-500/30 rounded hidden sm:block"/>
    </motion.div>
)
}
