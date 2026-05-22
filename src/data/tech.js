import {
  SiQgis,
  SiLeaflet,
  SiOpenstreetmap,
  SiPostgresql,
  SiNumpy,
  SiScikitlearn,
  SiGooglesheets,
} from "react-icons/si";
import { LuWorkflow } from "react-icons/lu";

import next from "../../assets/experiences/nextjs.png";
import supabase from "../../assets/experiences/supabase.png";
import shadcn from "../../assets/experiences/shadcn-ui.png";
import electron from "../../assets/experiences/electron.svg";
import ts from "../../assets/experiences/typescript.png";
import native from "../../assets/experiences/react-native.svg";
import mongodb from "../../assets/experiences/mongodb.png";
import python from "../../assets/experiences/python.png";
import node from "../../assets/experiences/node.png";
import express from "../../assets/experiences/express.png";
import vercel from "../../assets/experiences/vercel.svg";

export const techStack = [
  { name: "Next.js", icon: next },
  { name: "TypeScript", icon: ts },
  { name: "ShadCN", icon: shadcn, hasBg: true },
  { name: "React Native", icon: native },
  { name: "Electron", icon: electron },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", Component: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: supabase },
  { name: "Vercel", icon: vercel },
  { name: "Python", icon: python },
  { name: "NumPy", Component: SiNumpy, color: "#4DABCF" },
  { name: "scikit-learn", Component: SiScikitlearn, color: "#F7931E" },
  { name: "Google Sheets", Component: SiGooglesheets, color: "#34A853" },
  { name: "QGIS", Component: SiQgis, color: "#589632" },
  { name: "Leaflet", Component: SiLeaflet, color: "#199900" },
  { name: "OpenStreetMap", Component: SiOpenstreetmap, color: "#7EBC6F" },
  { name: "BPMN", Component: LuWorkflow, color: "#C084FC" },
];
