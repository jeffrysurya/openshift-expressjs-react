import React from "react";
import { BiUser, BiLogOut } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import Logo from "../../assets/logo192.png";

export default function ContentRight() {
  return (
    <section className="w-96 bg-gray-100 overflow-hidden px-8">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <BiLogOut size={20} />
      </div>
      <div className="card mt-10">
        <div className="relative p-5 text-white">
          <div className="text-lg">Jeffry Suryadharma</div>
          <div className="mt-10 space-y-2">

            <div>Challenge Chapter 8</div>
            <div className="flex justify-between relative">
              <span>React JS</span>
              <img src={Logo} alt="visa" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
