import React from 'react'

import { FiSmartphone } from "react-icons/fi";
import { RxDesktop } from "react-icons/rx";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg"

const Card = () => {
  return (

    <section className=" py-10 grid grid-cols-auto place-items-center gap-10 ">

      <section className='duration-1000 min-w-80 min-h-52 rounded-3xl p-1 shadow-lg shadow-purple-400 bg-purple-600 2xs:min-w-52'>
        <article className='rounded-3xl grid place-items-center p-5 gap-5 bg-purple-700 w-full h-full p3'>
          <span className='flex items-center gap-2 w-full justify-center'>
            <span className='bg-white p-3 rounded-full'>
              <CgWebsite size='50' color='#171a1b' />
            </span>
            <p className='text-wrap font-bold uppercase'>Web Development</p>
          </span>

          <p className='text-gray-300 text-sm max-w-80' >Web developer with expertise in Vite and Node.js, creating high-performance and scalable web applications.
            Skilled in building user-friendly and responsive interfaces using modern front-end frameworks such as React and Vue.js.
            Experienced in designing RESTful APIs, managing databases,
            and ensuring web applications adhere to industry standards and best practices.</p>
        </article>
      </section>

      <section className='duration-1000 min-w-80 min-h-52 rounded-3xl p-1 shadow-lg shadow-purple-400 bg-purple-600 2xs:min-w-52'>
        <article className='rounded-3xl grid place-items-center p-5 gap-5 bg-purple-700 w-full h-full p3'>
          <span className='flex items-center gap-2 w-full justify-center'>
            <span className='bg-white p-3 rounded-full'>
              <FiSmartphone size='50' color='#171a1b' />
            </span>
            <p className='text-wrap font-bold uppercase'>Mobile Development</p>
          </span>

          <p className='text-gray-300 text-sm max-w-80' >Mobile developer specializing in React Native, with a 
          strong track record of creating high-quality, cross-platform mobile applications. Skilled in leveraging 
          React Native to develop intuitive, performant, and visually appealing apps for both iOS and Android. 
          Experienced in integrating third-party APIs and tools to enhance app functionality and user experience. </p>
        </article>
      </section>

      <section className='duration-1000 min-w-80 min-h-52 rounded-3xl p-1 shadow-lg shadow-purple-400 bg-purple-600 2xs:min-w-52'>
        <article className='rounded-3xl grid place-items-center p-5 gap-5 bg-purple-700 w-full h-full p3'>
          <span className='flex items-center gap-2 w-full justify-center'>
            <span className='bg-white p-3 rounded-full'>
              <RxDesktop size='50' color='#171a1b' />
            </span>
            <p className='text-wrap font-bold uppercase text-center'>Desktop Development</p>
          </span>

          <p className='text-gray-300 text-sm max-w-80' >Desktop developer proficient in Python, with extensive 
          experience creating efficient, reliable, and user-friendly desktop applications. Skilled in using Python 
          frameworks such as PyQt and Tkinter to build feature-rich applications with sophisticated graphical user 
          interfaces. Expertise in software architecture, data handling, and integration of third-party libraries and APIs. 
           </p>
        </article>
      </section>

    </section>

  )
}

export default Card
