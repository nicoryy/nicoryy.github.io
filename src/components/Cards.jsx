import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";
import { RxDesktop } from "react-icons/rx";

const Card = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "Web developer with expertise in Vite and Node.js, creating high-performance and scalable web applications. Skilled in building user-friendly and responsive interfaces using modern front-end frameworks such as React and Vue.js. Experienced in designing RESTful APIs, managing databases, and ensuring web applications adhere to industry standards and best practices.",
      icon: <CgWebsite size="50" color="#171a1b" />,
    },
    {
      id: 2,
      title: "Mobile Development",
      desc: "Mobile developer specializing in React Native, with a strong track record of creating high-quality, cross-platform mobile applications. Skilled in leveraging React Native to develop intuitive, performant, and visually appealing apps for both iOS and Android. Experienced in integrating third-party APIs and tools to enhance app functionality and user experience.",
      icon: <FiSmartphone size="50" color="#171a1b" />,
    },
    {
      id: 3,
      title: "Desktop Development",
      desc: "Desktop developer proficient in Python, with extensive experience creating efficient, reliable, and user-friendly desktop applications. Skilled in using Python frameworks such as PyQt and Tkinter to build feature-rich applications with sophisticated graphical user interfaces. Expertise in software architecture, data handling, and integration of third-party libraries and APIs.",
      icon: <RxDesktop size="50" color="#171a1b" />,
    },
  ];

  return (
    <section className="py-10 grid grid-cols-auto place-items-center gap-10">
      {services.map((service) => (
        <section
          key={service.id}
          className="transition-all ease-in min-h-52 rounded-3xl p-1 border-purple border-opacity-40 hover:border-opacity-100 border-4"
        >
          <div className="rounded-3xl grid place-items-center px-10 py-5 gap-5 w-full h-full">
            <span className="flex items-center gap-2 w-full justify-center">
              <span className="bg-white p-3 rounded-full">{service.icon}</span>
              <p className="text-wrap font-bold uppercase">{service.title}</p>
            </span>
            <article className="text-gray-300 text-sm max-w-80">
              {service.desc}
            </article>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Card;
