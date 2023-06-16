import { useEffect, useState, useRef } from 'react'

const useIsBottom = () => {
  const currentRef = useRef()

  const [isBottom, setIsBottom] = useState(false)

  const observerCallback = (entries) => {
    console.log(entries)
    setIsBottom(entries[0].isIntersecting)
  }

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback)

    if (currentRef.current) observer.observe(currentRef.current)

    return () => {
      if (currentRef.current) observer.unobserve(currentRef.current)
    }
  }, [currentRef, isBottom])

  return { currentRef, isBottom }
}

export default useIsBottom
