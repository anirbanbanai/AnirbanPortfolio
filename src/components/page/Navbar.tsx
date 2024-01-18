import React from "react";
import { CiGlobe, CiGrid42, CiHome, CiSatellite1 } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { Button } from "../ui/button";

const Navbar = () => {
  const NavItem = (
    <>
      <li className="">
        <a
          href="#home"
          className="text-xl pp font-semibold max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"
        >
          <span className="max-lg:hidden">Home</span>
          <span className="lg:hidden">
            <CiHome className="text-3xl " />
          </span>
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"
        >
          <span className="max-lg:hidden">About</span>
          <span className="lg:hidden">
            <CiGrid42 className="text-3xl" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="#service"
          className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"
        >
          <span className="max-lg:hidden">Services</span>
          <span className="lg:hidden">
            <CiSatellite1 className="text-3xl" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="#skill"
          className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"
        >
          <span className="max-lg:hidden">Skill</span>
          <span className="lg:hidden">
            <GiSkills className="text-3xl" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"
        >
          <span className="max-lg:hidden">Contact</span>
          <span className="lg:hidden">
            <CiGlobe className="text-3xl" />
          </span>
        </a>
      </li>
    </>
  );
  return (
    <main className="flex justify-between bg-slate-50 items-center p-4 max-md:hidden">
      <div>
        <a className="btn btn-ghost normal-case text-3xl sm:text-4xl lg:text-5xl  font-bold">
          <span className="text-red-500">My</span>
          <span className="text-blue-500">Portfolio</span>
        </a>
      </div>
      <div className="flex justify-between px-1 gap-3">
      <ul className="menu menu-horizontal px-1 flex gap-3 justify-between">
      {NavItem}
      </ul>
      </div>
      <div>
      <a className="hidden md:flex items-center justify-center" href="https://drive.google.com/file/d/1JEEwXx3YPzM-VxzVoESnTmAvcAoW2V9T/view">
                       <Button className="bg-red-300 p-2 rounded-full hover:bg-yellow-200">Download Cv</Button>
                    </a>
      </div>
    </main>
  );
};

export default Navbar;
