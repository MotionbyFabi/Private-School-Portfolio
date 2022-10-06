import React, { useEffect } from "react";
import Draggable from "react-draggable";
import create, { useStore } from "zustand";

interface Props {
  children: React.ReactNode;
  title: string;
}

interface appProps {
  appName: string;
}

export const useAppStore = create<appProps>((appName) => ({
  appName: "Main",
}));

const layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="w-screen h-full pt-10">
      <Draggable handle=".handle" grid={[2, 2]} bounds="parent">
        <div className="cursor-pointer inline-block">
          <nav className="handle cursor-pointer">
            <div>
              <h1 className="text-white">{title}</h1>
            </div>
          </nav>
          <div className="text-white">{children}</div>
        </div>
      </Draggable>
    </div>
  );
};

export default layout;
