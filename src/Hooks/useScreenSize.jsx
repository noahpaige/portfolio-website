import { useState, useEffect } from 'react'

const useScreenSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  const handleResize = () => setSize([window.innerWidth, window.innerHeight])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return size
}

export default useScreenSize
