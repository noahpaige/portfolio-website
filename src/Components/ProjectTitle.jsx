import React, { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ChromaticText from './ChromaticText'
import { openSpring, closeSpring } from '../Animations'

const variants = {
  open: {
    fontSize: '8rem',
    transition: { openSpring }
  },
  closed: {
    fontSize: '3rem',
    transition: { closeSpring }
  }
}

const ProjectTitle = ({ isOpen, title, tags, width, height }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [textOffset, setTextOffset] = useState('0.05rem')

  useEffect(() => {
    if (!isHovered && !isOpen) setTextOffset('0.05rem')
    if (isHovered && !isOpen) setTextOffset('0.2rem')
    if (!isHovered && isOpen) setTextOffset('0.2rem')
    if (isHovered && isOpen) setTextOffset('0.3rem')
  }, [isOpen, isHovered])

  return (
    <div
      className={'absolute top-0 w-full flex flex-col h-full'}
      style={{ height: isOpen && height }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onMouseDown={() => !isOpen && setIsHovered(true)}
      onMouseUp={() => !isOpen && setIsHovered(false)}
    >
      <div className='ml-2 [&>*:nth-child(1)]:ml-0'>
        {tags.map((tag, index) => (
          <motion.span
            className='badge bg-[rgba(20,30,40,0.3)] backdrop-blur-lg border-none mx-1 my-2 text-slate-100'
            animate={isOpen ? { margin: '1rem 0.5rem 1rem 0.5rem', fontSize: '1.5rem', height: '2.25rem' } : { margin: '0.5rem 0.25rem 0.5rem 0.25rem', fontSize: '1rem', height: '1.5rem' }}
            key={index}>
            {tag}
          </motion.span>
        ))}
      </div>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial={'closed'}
        variants={variants}
        className='ml-2 font-bold'
      >
        <ChromaticText text={title} offset={textOffset}/>
      </motion.div>
    </div>

  )
}

export default memo(ProjectTitle)
