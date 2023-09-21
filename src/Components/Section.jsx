import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useIsInViewport from '../Hooks/useIsInViewport'
import { SiteContext } from '../App'
import useBuildCurves from '../Hooks/useBuildCurves'
import Color from '../Classes/Color'

//A test comment

function Section ({ content, path, topColor, bottomColor }) {
  const { state, setState } = useContext(SiteContext)
  const navigate = useNavigate()
  const ruff = useRef()
  const bgColor = new Color().set({ r: 20, g: 15, b: 30 })
  const curveHeight = 2
  const numCurves = 5
  const [curves, setCurves] = useState({ tops: [], bottoms: [] })
  const handleIsInView = () => {
    if (window.location.pathname.toLowerCase() !== path) navigate(path)
  }
  const isInViewport = useIsInViewport(ruff, 0.9, handleIsInView)

  useEffect(() => { setCurves(useBuildCurves(numCurves, curveHeight, topColor, bottomColor, bgColor)) }, [])
  useEffect(() => {
    if (window.location.pathname.toLowerCase() === path && !state.isNavigating) {
      ruff.current.scrollIntoView({ behavior: 'smooth' }) // scroll to this section
      setState({ isNavigating: true })
    }

    return () => {
      if (isInViewport) setState({ isNavigating: false })
    }
  }, [window, ruff, state])
  return (
    <div ref={ruff} className="snap-center h-full w-full relative" style={{ backgroundColor: bgColor.toString() }}>
      {curves.tops.map((curve, index) => (
        <svg
          className='w-full h-full absolute top-0 pointer-events-none overflow-hidden'
          viewBox={`0 ${100 - ((numCurves - index) * curveHeight)} 100 100`}
          preserveAspectRatio="none"
          key={index}
        >
          <path d={curve.path} stroke="transparent" fill={curve.color} />
        </svg>
      ))}
      {curves.bottoms.map((curve, index) => (
        <svg
          className='w-full  h-full  absolute bottom-0 pointer-events-none'
          viewBox={`0 ${-100 + ((numCurves - index) * curveHeight)} 100 100`}
          preserveAspectRatio="none"
          key={index}
        >
          <path d={curve.path} stroke="transparent" fill={curve.color} />
        </svg>
      ))}
      <div className='h-full w-full p-8 overflow-overlay' style={{ paddingTop: curveHeight * numCurves + 'vh', paddingBottom: curveHeight * numCurves + 'vh' }}>{content}</div>
    </div>
  )
}

export default Section
