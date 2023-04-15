import { Context, ContextValue } from "../components/Provider/Context";
import { useContext } from "react";

export const useNodes = () => useContext(Context) as ContextValue;
