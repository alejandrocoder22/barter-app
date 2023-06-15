import { useEffect, useState, useRef } from 'react'

const useIsBottom = () => {
  const currentRef = useRef()

  const [isBottom, setIsBottom] = useState(false)

  const observerCallback = (entries) => {
    setIsBottom(entries[0].isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback)

    if (currentRef.current) observer.observe(currentRef.current)

    return () => {
      if (currentRef.current) observer.unobserve(currentRef.current)
    }
  }, [currentRef])

  return { currentRef, isBottom }
}

export default useIsBottom
