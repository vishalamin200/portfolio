'use client'

import { ReactNode,  useEffect,  useRef } from "react"


const RevealOnScroll = ({children}:{children:ReactNode}) => {
  
  const divRef = useRef<null | HTMLDivElement>(null) 

  
  useEffect(()=>{
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && divRef.current) {
              divRef.current.classList.remove('opacity-0')
              divRef.current.classList.add('reveal')
          }
      }, {
        threshold:0.2,
        rootMargin: "0px 0px -50px 0px"
      })

      if (divRef.current) observer.observe(divRef.current)

      return ()=> observer.disconnect()
  },[])


  return (
      <div ref={divRef} className="opacity-0">
      {children}
    </div>
  )
}

export default RevealOnScroll
