import { useContext } from "react";
import { LangContext } from "../context/langContextInstance";

export const useLang = () => useContext(LangContext);
