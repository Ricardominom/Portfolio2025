import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss, faJs, faReact, faAngular, faJava, faNode, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faDownload, faServer } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated } from "react-spring"
import { useState } from "react"

const CV = '/Ricardo_Mino_Resume.pdf'

export default function Aboutme() {
  const [flip, setFlip] = useState(false)

  const useProps = (delay) => useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: delay, 
    onReset: () => setFlip(!flip)
  })


  return (
    <>
      <div className="text-white px-12 py-8 gap-28 min-h-screen">
        <div className="flex flex-col gap-4 text-">
          <section className="flex flex-wrap justify-between gap-5 mb-8">
            <h1 className="text-5xl text-red-500 font-bold">About Me</h1>
            <a href={CV} className="bg-slate-300 hover:bg-slate-400 text-red-500 font-bold p-3 rounded-lg" download>
              <FontAwesomeIcon icon={faDownload} />
              <span className="ml-3">Resume / CV</span>
            </a>
          </section>
          <p>
            Ricardo Mino is a highly motivated and detail-oriented Frontend Developer with an exceptional ability to work effectively within cross-functional teams. He has solid experience in programming languages such as JavaScript, Java, HTML, CSS, React, Node.js, SQL, Spring Boot, Angular, and other modern technologies.
          </p>
          <p>
            With a background in mechanical engineering, Ricardo combines his technical expertise with strong problem-solving skills, enabling him to deliver high-quality programming solutions that meet client needs. His extensive experience in the automotive industry has prepared him to manage complex projects where precision and attention to detail are crucial.
          </p>
          <p>
            Throughout his career, Ricardo has consistently demonstrated the ability to deliver projects on time and within budget, making him a valuable asset to any development team. In addition to his technical skills, Ricardo is a highly creative individual with a deep passion for music. Holding a degree in music, specializing in piano, he understands the importance of perseverance, dedication, and discipline required to produce high-quality work.
          </p>
          <p>
            In summary, Ricardo Mino is a talented software developer with a diverse background, ready to take on new challenges in the tech industry. His commitment to excellence and passion for delivering exceptional results make him a standout professional.
          </p>
        </div>

        <div className="py-10 mt-5">
          <h1 className="text-5xl font-bold text-red-500">Technical Knowledge and Skills</h1>

          <div className="flex flex-col sm:flex-row">
            <section className="w-full sm:w-1/2 py-5 text-yellow-300 text-2xl">
              <animated.div style={useProps(1000)}>
                <h2 className="font-bold text-4xl my-3 flex justify-center">Frontend</h2>
              </animated.div>
              <animated.div style={useProps(2000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faHtml5} />
                  <span className="ml-2">HTML 5</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(3000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faCss} />
                  <span className="ml-2">CSS</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(4000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faJs} />
                  <span className="ml-2">JavaScript</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(5000)}>
                <ul className="flex justify-center items-center mb-2">
                  <span className="ml-2">TypeScript</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(6000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faReact} />
                  <span className="ml-2">React</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(7000)}>
                <ul className="flex justify-center items-center mb-2">
                  <span className="ml-2">Tailwind</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(8000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faAngular} />
                  <span className="ml-2">Angular</span>
                </ul>
              </animated.div>
            </section>

            <section className="w-full sm:w-1/2 py-5 text-fuchsia-500 text-2xl">
              <animated.div style={useProps(1000)}>
                <h2 className="font-bold text-4xl my-3 flex justify-center">Backend</h2>
              </animated.div>
              <animated.div style={useProps(2000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faJs} />
                  <span className="ml-2">JavaScript</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(3000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faJava} />
                  <span className="ml-2">Java</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(4000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faNode} />
                  <span className="ml-2">Node.js</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(5000)}>
                <ul className="flex justify-center items-center mb-2">
                  <span className="ml-2">SpringBoot</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(6000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faDatabase} />
                  <span className="ml-2">MySQL</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(7000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faServer} />
                  <span className="ml-2">MongoDB</span>
                </ul>
              </animated.div>
              <animated.div style={useProps(8000)}>
                <ul className="flex justify-center items-center mb-2">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="ml-2">Git/GitHub</span>
                </ul>
              </animated.div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
