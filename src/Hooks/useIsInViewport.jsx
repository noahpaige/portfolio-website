// useIsInViewport.js
import { useState, useEffect } from 'react'

const useIsInViewport = (ref, threshold = 0.5, callback = () => {}) => {
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsInViewport = entry.isIntersecting
        setIsInViewport(newIsInViewport)

        if (newIsInViewport) {
          // debounce(callback, 50); // Call the callback when component is in view
          callback() // Call the callback when component is in view
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold, callback])

  return isInViewport
}

export default useIsInViewport
