import react from "../../assets/atom.png";
import node from "../../assets/node-js.png";
import tail from "../../assets/icons8-tailwind-css-512.png";
import express from "../../assets/icons8-expresso-js-512.png";
import python from "../../assets/python.png";
import mongodb from "../../assets/icons8-mongodb-512.png";
import native from "../../assets/sdk-react-native.svg";
import js from "../../assets/js.png";
import ts from "../../assets/icons8-typescript-96.png";
import vercel from "../../assets/vercel-logo-svgrepo-com.svg";

const Experience = () => {
  return (
    <section id="Experience" className="text-center my-20">
      <p className="font-bold text-3xl uppercase mb-32"> experiences</p>
      <ul className="grid place-items-center lg:grid-cols-4 grid-cols-2 gap-20">
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={react} alt="reactimg" />
          <p className="text-gray-400 text-xl">React.Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={node} alt="reactimg" />
          <p className="text-gray-400 text-xl">Node.Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={express} alt="reactimg" />
          <p className="text-gray-400 text-xl">Express.Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={mongodb} alt="reactimg" />
          <p className="text-gray-400 text-xl">MongoDb</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={python} alt="reactimg" />
          <p className="text-gray-400 text-xl">Python</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={native} alt="reactimg" />
          <p className="text-gray-400 text-xl">React Native</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={tail} alt="reactimg" />
          <p className="text-gray-400 text-xl">Tailwind Css</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={js} alt="reactimg" />
          <p className="text-gray-400 text-xl">JavaScript</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={ts} alt="reactimg" />
          <p className="text-gray-400 text-xl">TypeScript</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={vercel} alt="reactimg" />
          <p className="text-gray-400 text-xl">Vercel</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
