import React from "react";
import Draggable from "react-draggable";
import { useAppStore } from "./createAppStore";


interface Props {
  children: React.ReactNode;
  title: string;
}



const layout: React.FC<Props> = ({ children, title }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ appName, setAppName ] = useAppStore((state) => [state.appName, state.setAppName]);
  const handleClick = () => {
    setAppName("Finder")
  };
    
  return (
    <div className="w-screen h-full pt-10">
      <Draggable handle=".handle" grid={[2, 2]} bounds="parent">
        <div className="inline-block">
          <nav className="handle cursor-pointer h-5 flex  items-center  bg-gray-300 w-[854px] relative top-0 left-0 rounded-t-lg">  
              <div className="p-1 h-full pl-2 space-x-1 place-content-center place-items-center absolute">
              <button onClick={() => handleClick()} className="float-left w-3 h-3 rounded-full bg-red-500 hover:opacity-75"></button>
              <button className="float-left w-3 h-3 rounded-full bg-yellow-500 hover:opacity-75"></button>
              <button className="float-left w-3 h-3 rounded-full bg-green-500 hover:opacity-75"></button>
              </div>
              <div className="flex justify-center w-full">
              <h1 className="text-black text-[14px] text-center">{title}</h1>
              </div>
          </nav>
          <div className="text-white rounded-b-lg w-[854px] h-[480px]">{children}</div>
        </div>
      </Draggable>
    </div>
  );
};

export default layout;
