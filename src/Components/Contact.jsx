import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
  const form = useRef();
  const [sent, useSent] = useState("Submit")
  const [color, setColor] = useState('indigo');
  const sendEmail = (e) => {
    e.preventDefault();
    // useSent('Loading...')
    emailjs
      .sendForm('service_mgcebuk', 'template_tx1ha9c', form.current, {
        publicKey: 'RZkl3DePKJf33q6qq',
      })
      .then(
        () => {
          // useSent('Sent')
          setColor('green');
          console.log('SUCCESS!');
        },
        (error) => {
          // useSent('Failed')
          setColor('red');
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font relative"><hr />
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Got something on your mind? Don't hesitate to reach out! Whether it's a query about our products, a partnership opportunity, or simply a friendly chat, we're here to listen. Fill out the form below and we'll be in touch promptly. Looking forward to connecting with you!.</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            {/* <div class="flex flex-wrap -m-2"> */}
              <form ref={form} onSubmit={sendEmail} class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                    <input type="text" id="name" name="user_name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="email" name="user_email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                    <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button style={{ backgroundColor: color }} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Send">{ sent }</button>
                </div>
              </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
