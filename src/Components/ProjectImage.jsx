import React, { useEffect, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'

const ProjectImage = ({ isOpen, imgSrc, width, height, imgPOI, title, children }) => {
  const containerRef = useRef()
  const imgRef = useRef()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const cRect = containerRef.current.getBoundingClientRect()
    const iRect = imgRef.current.getBoundingClientRect()

    console.log('here')
  }, [])

  return (
    <>
      <motion.div
        ref={containerRef}
        className='h-[400px] w-full overflow-hidden'
        style={{ originX: 0, originY: 0 }}
      >
        <div className='relative'>
          <motion.img
          ref={imgRef}
          src={imgSrc}
          alt={title + ' Image'}
          className='object-cover w-full h-[inherit]'
          initial={false}
          animate={ isOpen ? { x: 0, y: 0 } : { x: -imgPOI.x, y: imgPOI.y } }
          />
          {children}
        </div>

      </motion.div>
    </>

  )
}

export default memo(ProjectImage)
