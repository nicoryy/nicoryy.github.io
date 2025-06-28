import react from "../../assets/experiences/react.png";
import node from "../../assets/experiences/node.png";
import express from "../../assets/experiences/express.png";
import python from "../../assets/experiences/python.png";
import mongodb from "../../assets/experiences/mongodb.png";
import native from "../../assets/experiences/react-native.svg";
import ts from "../../assets/experiences/typescript.png";
import vercel from "../../assets/experiences/vercel.svg";
import next from "../../assets/experiences/nextjs.png";
import supabase from '../../assets/experiences/supabase.png';
import shadcn from '../../assets/experiences/shadcn-ui.png';
import electron from "../../assets/experiences/electron.svg";

const Experience = () => {
  return (
    <section id="Experience" className="text-center my-20">
      <p className="font-bold text-3xl uppercase mb-32"> experiences</p>
      <ul className="grid place-items-center lg:grid-cols-4 grid-cols-2 gap-20">
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={next} alt="nextjs" />
          <p className="text-gray-400 text-xl">Next Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={supabase} alt="supabase" />
          <p className="text-gray-400 text-xl">Supabase</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16 bg-white/70 rounded-3xl p-3" src={shadcn} alt="shadcn" />
          <p className="text-gray-400 text-xl">ShadCn</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={electron} alt="electron" />
          <p className="text-gray-400 text-xl">Electron Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={ts} alt="typescript" />
          <p className="text-gray-400 text-xl">TypeScript</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={native} alt="reactnative" />
          <p className="text-gray-400 text-xl">React Native</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={mongodb} alt="mongodb" />
          <p className="text-gray-400 text-xl">MongoDb</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={python} alt="python" />
          <p className="text-gray-400 text-xl">Python</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={node} alt="nodejs" />
          <p className="text-gray-400 text-xl">Node.Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={express} alt="expressjs" />
          <p className="text-gray-400 text-xl">Express.Js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <img className="size-16" src={vercel} alt="vercel" />
          <p className="text-gray-400 text-xl">Vercel</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
