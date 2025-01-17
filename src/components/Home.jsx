import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJava, faReact, faNode } from "@fortawesome/free-brands-svg-icons"
import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
  const [index, setIndex] = useState(0) 
  const texts = [
    { content: <h1 className="text-red-500">Web Developer</h1> },
    {
      content: (
        <h1 className="text-yellow-400">
          <FontAwesomeIcon icon={faReact} color="white" className="mr-2" />
          Front-End &
        </h1>
      ),
    },
    {
      content: (
        <h1 className="text-lime-500">
          <FontAwesomeIcon icon={faNode} color="white" className="mr-2" />
          Back-end
          <FontAwesomeIcon icon={faJava} color="white" className="ml-2" />
        </h1>
      ),
    },
  ]

  const [flip, setFlip] = useState(false)

  const animationProps = useSpring({
    opacity: 1,  
    from: { opacity: 0, transform: "scale(0.8" },  
    reset: true,
    reverse: flip,
    onRest: () => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
      setFlip(!flip) 
    },
    config: { 
      duration: 2000,
      tension: 200,
      friction: 50
    }
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlip(!flip)
    }, 3500) 

    return () => clearInterval(intervalId) 
  }, [flip])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-4 md:p-10">
      <div className="font-bold text-4xl md:text-7xl text-white flex items-center">
        <animated.div style={animationProps}>
          {texts[index].content}
        </animated.div>  
      </div>
      <div className="mt-4 md:mt-0">
        <img className="w-64 md:w-96" src="/developer-image.svg" alt="developer_image" />
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center items-center mt-4 md:mt-0">
        <NavLink to='/aboutme'>
          <button className="px-4 py-2 md:px-6 md:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl md:text-3xl font-bold">
            About me
          </button>
        </NavLink>
      </div>
    </div>
  )
}
