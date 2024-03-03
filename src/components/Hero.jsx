import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { PaletteCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#a550b3]' />
          <div className='w-1 sm:h-80 h-40 pink-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#a550b3]'>Dejana</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create captivating paintings, <br className='sm:block hidden' />
            artwork, and visual experiences.
          </p>
        </div>
      </div>

      &nbsp;
      &nbsp;

      <PaletteCanvas />
    </section>
  )
}

export default Hero