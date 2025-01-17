import { useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project(project) {

  const { image } = project

  
  const [modal, setModal] = useState(false)

  const handleClick = (id) => {
    id
    setModal(true)
  }

  return (
    <>
        <div className="grid justify-items-center">
            <img 
              className="object-cover w-full h-full hover:scale-125 transition-transform hover:rotate-2 rounded-lg" 
              src={`/${image}.jpg`}   
              alt="project image" 
              onClick={() => handleClick()}
            />
        </div>


          <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setModal(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"s
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-70" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                      <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                          {project.projectName}
                          <img className="flex justify-self-center w-auto h-auto" src={`/${image}.jpg`} alt="project image" />
                      </Dialog.Title>
                      <Dialog.Title as="h3" className="my-5">
                        <p className="text-gray-900 text-2xl font-extrabold">Description:</p>
                        {project.description}
                      </Dialog.Title>
                      <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                        <a href={project.url} className="sm:w-auto mb-2 sm:mb-0">
                          <button className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg w-full sm:w-5/6 mb-3">Watch Project</button>
                        </a>
                        <a href="https://github.com/Ricardominom" className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
                          <button className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg w-full sm:w-auto  flex-reverse"><FontAwesomeIcon icon={faGithub}/>
                          </button>
                        </a>
                      </Dialog.Title>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
    </>
  )
}


