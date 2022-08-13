import React from "react";
import Logo from "../../assets/logo192.png";
import {
  BiHomeAlt,
  BiSortUp,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Players", icon: <BsPeople /> },
    { name: "Highscore", icon: <BiSortUp />, href:"/link" },
  ];
  return (
    <div className="border-r border-gray-200 w-64 px-9 space-y-20">
      <div className="flex flex-row items-center pt-8">
        <img src={Logo} alt="logo" className="w-7 h-7" />
        <div className="pl-2">JSD</div>
      </div>
      <div>
        <div className="mb-4">Menu</div>
        <ul className="space-y-7">
          {menu.map((val, index) => {
            return (
              <li
                key={index}
                className="flex flex-row items-center text-gray-400"
              >
                <div>
                <button className="mr-5">{val.icon}</button>
                </div>
                <div>
                <button className="mr-5" href={val.href}>{val.name}</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
