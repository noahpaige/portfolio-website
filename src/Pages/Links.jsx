import React from 'react'
import { motion } from 'framer-motion'

function Links () {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-8 place-content-around'>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target='_blank'
        href='https://github.com/noahpaige/'
        rel="noreferrer"
        className='bg-purple-800 h-20 w-32 rounded-xl text-2xl font-bold flex items-center justify-center'
      >
        github
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target='_blank'
        href='https://www.linkedin.com/in/noah-paige'
        rel="noreferrer"
        className='bg-blue-600 h-20 w-32 rounded-lg text-2xl font-bold flex items-center justify-center'
      >
        linkedin
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='mailto:noahlandonpaige@gmail.com&subject=What&apos;s up?'
        className='bg-orange-400 h-20 w-32 rounded-lg text-2xl font-bold flex items-center justify-center'
      >
        email me
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target='_blank'
        href='https://github.com/noahpaige/'
        rel="noreferrer"
        className='bg-emerald-600 h-20 w-32 rounded-lg text-2xl font-bold flex items-center justify-center'
      >
        resume
      </motion.a>
    </div>
  )
}

export default Links
