import Image from "next/image";
import React from "react";
import Logo from "../../public/Apple_logo_black.png";
import { useAppStore } from "../Apps/layout";

const Index = () => {
  const appName = useAppStore((state) => state.appName);
  return (
    <>
      <nav className="w-full bg-gray-300 h-10 flex justify-center items-center flex-row space-x-4 pl-5">
        <div className="flex flex-row space-x-4 justify-center items-center place-items-center">
          <div className="h-4 w-4">
            <Image src={Logo} alt="logo" layout="responsive" />
          </div>
          <h1>{appName}</h1>
        </div>
        <ul className="w-full flex flex-row space-x-4">
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </nav>
    </>
  );
};

export default Index;
