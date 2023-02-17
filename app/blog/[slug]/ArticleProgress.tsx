'use client'

import { motion, useScroll } from "framer-motion";


export default function ArticleProgress() {
    const { scrollYProgress } = useScroll()
    return <motion.div
        style={{ scaleX: scrollYProgress }}
        className='h-[10px] z-10 bg-red-600 dark:bg-red-800 fixed top-0 left-0 right-0 origin-[0%]'
    />

}