import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import apiKey from './emailkey';
const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, form.current, apiKey.PUBLIC_KEY)
      .then((result) => {
        alert("Mensaje enviado, gracias por contactarnos !", result.text);
      },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        });
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl text-gray-700">
      <div className="grid grid-cols-2">

        <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <form action="" ref={form} className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">Nombre</label>
              <input type="text" id="name" name="name"
                placeholder="Nombre"
                className="form-input w-full block shadow-sm rounded border-white-300 bg-gray-600 text-white placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email"
                placeholder="Email"
                className="form-input w-full block shadow-sm rounded border-white-300 bg-gray-600 text-white placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" cols="30" rows="4"
                placeholder="¿Como ayudamos?"
                className="form-textarea resize-none w-full shadow-sm rounded border-gray-300 bg-gray-600 text-white placeholder-gray-300 focus:border-green-400 focus:ring-green-400"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="py-2 px-6 rounded bg-green-400 text-base text-white font-semibold hover:bg-green-500">Send Message</button>
            </div>
          </form>
        </div>

        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            <h2 className="text-4xl font-oswald font-bold uppercase">Contacto</h2>
            <p className="text-sm text-gray-500">Si quieres hacer un evento, eres dj o simplemente quieres conocer a nuestra casa y nuestros djs comunicate con nosotros.</p>
            <a href="/" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              thevoidclub1@gmail.com
            </a>
            <a href="/" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              +502 5129 6949
            </a>
            <p className="text-sm text-gray-500 leading-6">Carr. La Barca, <br /> Amatitlan <br /> Guatemala</p>
            <div className="flex items-center">
              <a href="https://www.instagram.com/clubthevoid/" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs