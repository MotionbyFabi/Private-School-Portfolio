import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/github.svg";
import { useAppStore } from "../Apps/createAppStore";

const Index = () => {
  const appName = useAppStore((state) => state.appName);

  return (
    <>
      <nav className="w-full bg-[#15294a] text-white h-10 flex justify-center items-center flex-row space-x-4 pl-5">
        <div className="flex flex-row space-x-4 justify-center items-center place-items-center">
          <div className="h-6 w-6 cursor-pointer">
            <Link href="https://github.com/MotionbyFabi/Private-School-Portfolio">
              <Image src={Logo} alt="github Logo" />
            </Link>
          </div>
          <h1 className="w-max">{appName}</h1>
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
