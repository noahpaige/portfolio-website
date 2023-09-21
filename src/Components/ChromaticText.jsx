import React, { memo } from 'react'
import { motion } from 'framer-motion'

const ChromaticText = ({ text, offset }) => {
  return (
    <div className='relative'>
      <motion.span
        animate={{ margin: `-${offset} ${offset} ${offset} -${offset}` }}
        className={'absolute text-red-500 select-none'}>
        {text}
      </motion.span>
      <motion.span
        animate={{ margin: `${offset} ${offset} ${offset} ${offset}` }}
        className={'absolute text-blue-500 select-none'}>
        {text}
      </motion.span>
      <span className='text-slate-200 z-10 mix-blend-lighten'>{text}</span>
    </div>

  )
}

export default memo(ChromaticText)
