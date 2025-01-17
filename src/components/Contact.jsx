import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { faMailBulk, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons/faSquarePhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aubk6oh", "template_3l61o8p", form.current, {
        publicKey: "7dHXq8BKTJGMXPKiX"
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="grid h-auto grid-cols-1 lg:grid-cols-2 lg:h-screen items-center">
      <div className="m-10 md:mb-5">
        <form
          className="bg-slate-700 shadow-lg p-6 lg:p-10 rounded-lg font-bold uppercase"
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className="text-white flex justify-center text-xl lg:text-2xl">Contact Me</h1>

          <div className="flex flex-col gap-4 py-5">
            <label htmlFor="nameClient" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="bg-slate-300 w-full p-2"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="emailClient" className="text-white">
              Email
            </label>
            <input
              type="text"
              name="user_email"
              className="bg-slate-300 w-full p-2"
            />
          </div>

          <div className="py-5">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-3 bg-slate-300"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-green-600 hover:bg-green-700 w-full text-white uppercase font-bold cursor-pointer transition-colors rounded-lg p-3"
          />
        </form>
      </div>

      <div className="text-white p-4 lg:p-10 justify-self-center">
        <div className="p-5">
          <h1 className="text-white font-bold uppercase text-xl lg:text-2xl">My data</h1>
          <ul className="p-2 flex items-center">
            <FontAwesomeIcon icon={faSquarePhone} size="2x" color="#4FFF33" />
            <span className="ml-3">(+52) 222 657 4451</span>
          </ul>
          <ul className="p-2 flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#4FFF33" />
            <span className="ml-3">(+52) 222 657 4451</span>
          </ul>
          <ul className="p-2 flex items-center">
            <FontAwesomeIcon icon={faMailBulk} size="2x" color="#4FFF33" />
            <span className="ml-3">rdmm.291191@gmail.com </span>
          </ul>
          <ul className="p-2 flex items-center">
            <FontAwesomeIcon icon={faMapLocation} size="2x" color="#4FFF33" />
            <span className="ml-3">33 sur 1711, Puebla, Mexico</span>
          </ul>
        </div>

        <h1 className="mx-5 text-white font-bold uppercase text-xl lg:text-2xl">Social Media</h1>
        <div className="p-5 flex gap-4 lg:gap-10">
          <a href="https://www.linkedin.com/in/ricardo-daniel-mino-m%C3%A1rquez-385870223/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#4FFF33" />
          </a>
          <a href="https://github.com/Ricardominom">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#4FFF33" />
          </a>
          <a href="https://www.instagram.com/ricardominom/?hl=es-es">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#4FFF33" />
          </a>
        </div>
      </div>
    </div>
  );
}
