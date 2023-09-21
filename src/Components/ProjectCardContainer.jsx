import React, { memo, useRef, useState } from 'react'
import { motion, useAnimate, useMotionValueEvent, useScroll } from 'framer-motion'
import { openSpring, closeSpring } from '../Animations'
import ProjectCard from './ProjectCard'
import { EventBus } from '../Classes/EventBus'

const variants = {
  open: {
    card: {
      width: '80vw',
      height: '90vh',
      left: '10vw',
      zIndex: '30'
    },
    overlay: {
      part1: {
        width: '100vw',
        height: '100vh',
        zIndex: '20'
      },

      part2: {
        opacity: 1
      }
    }
  },
  closed: {
    card: {
      width: '100%',
      height: '100%',
      left: '0'
    },
    overlay: {
      part1: {
        opacity: 0,
        zIndex: '10'
      },
      part2: {
        width: '100%',
        height: '100%'
      }

    }
  }
}
const ProjectCardContainer = ({ title, imgSrc, imgPOI, content, tags, onCardToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cardRef, animCard] = useAnimate()
  const [overlayRef, animOverlay] = useAnimate()
  const outerEl = useRef()
  const { scrollY } = useScroll({ container: outerEl })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest)
  })

  const onCardClick = () => {
    if (!isOpen) {
      setIsOpen(true)
      EventBus.$emit('toggleBodyScroll')
      openAnimation(true)
    }
  }

  const onOverlayClick = () => {
    if (isOpen) {
      setIsOpen(false)
      EventBus.$emit('toggleBodyScroll')
      closeAnimation(false)
    }
  }

  async function openAnimation () {
    const outerRect = outerEl.current.getBoundingClientRect()

    await animOverlay(overlayRef.current, { ...variants.open.overlay.part1, x: -outerRect.x, y: -outerRect.y }, { duration: 0 })
    await Promise.all([
      animOverlay(overlayRef.current, { ...variants.open.overlay.part2 }, openSpring),
      animCard(cardRef.current, { ...variants.open.card, x: -outerRect.x, y: `calc(5vh - ${outerRect.y}px)` }, openSpring)
    ])
  }

  async function closeAnimation () {
    await Promise.all([
      animCard(cardRef.current, { ...variants.closed.card, x: 0, y: 0 }, closeSpring),
      animOverlay(overlayRef.current, { ...variants.closed.overlay.part1 }, closeSpring)
    ])
    await animOverlay(overlayRef.current, { ...variants.closed.overlay.part2, x: 0, y: 0 }, { duration: 0 })

    await animCard(cardRef.current, { zIndex: '10' })
  }

  return (
    <div ref={outerEl} className='relative'>
      <motion.div
        ref={overlayRef}
        whileHover={{ cursor: isOpen && 'pointer' }}
        onClick={onOverlayClick}
        className='absolute backdrop-blur-sm bg-slate-900/50' />
      <motion.div
        ref={cardRef}
        style={{ cursor: !isOpen && 'pointer' }}
        whileHover={{ scale: isOpen ? 1 : 1.02 }}
        className={'absolute bg-slate-700 h-full w-full flex flex-col shadow-xl bg-opacity-10 overflow-hidden rounded-xl'}
        onClick={onCardClick}
        >
        <ProjectCard isOpen={isOpen} imgSrc={imgSrc} imgPOI={imgPOI} title={title} content={content} tags={tags} />
      </motion.div>
    </div>
  )
}

export default memo(ProjectCardContainer)
