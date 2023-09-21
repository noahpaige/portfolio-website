import React, { useRef, memo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Scroller = ({ height, children, allowScroll, allowOverscroll = false }) => {
  const scrollRef = useRef(null)
  const barRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 15,
    restDelta: 0.1
  })

  return (
    <div
      ref={scrollRef}
      className={'w-full scroll-smooth'}
      style={{
        height,
        overscrollBehavior: allowOverscroll ? 'auto' : 'contain',
        overflow: allowScroll ? 'scroll' : 'hidden'
      }}
    >
      <div className='fixed h-full w-[12px] z-40 right-0' ref={barRef}>
        <motion.div
        className='bg-red-500 w-full h-full origin-top'
          style={{
            scaleY,
            visibility: allowScroll ? 'visible' : 'hidden'
          }}
        >
        </motion.div>
      </div>
      <div >
        {children}
      </div>
    </div>

  )
}

export default memo(Scroller)
