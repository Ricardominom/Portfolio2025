import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <div className='bg-blue-600 text-white font-bold flex flex-col md:flex-row justify-between items-center mx-auto px-8 md:px-32 p-2'>
        <div className='mb-4 md:mb-0'>
            Ricardo Mino - Developer
        </div>
        <div className='flex gap-4 md:gap-8'>
          <a href="https://www.linkedin.com/in/ricardo-daniel-mino-m%C3%A1rquez-385870223/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/Ricardominom">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/ricardominom/?hl=es-es">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
  )
}
