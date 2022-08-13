import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function List({ data, handleEdit, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="border border-gray-300 rounded w-full flex items-center py-3 px-3 mb-4">
        <BiSearch className="mr-2" />
        <input
          type="text"
          className="flex-1"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-row items-center border-b border-b-gray-200 py-3">
        <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center mr-3 text-black">
          No
        </div>
        <div className="flex-1">
          <div className="text-sm">Name</div>
        </div>
        <div className="flex-1">
          <div className="text-sm">Username</div>
        </div>
        <div className="flex-1 mr-4">
          <div className="text-sm">Email</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-center">Experience</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-center">Level</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-center">UUID</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-center">Action</div>
        </div>
      </div>
      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.lvl.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else {
            return false;
          }
        })
        .map((player, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center border-b border-b-gray-200 py-3"
            >
              <div className="h-10 w-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-3 text-white">
                {index +1}
              </div>
              <div className="flex-1">
                <div className="text-sm">{player.name}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm">{player.username}</div>
              </div>
              <div className="flex-1 mr-4">
                <div className="text-sm">{player.email}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-center">{player.experience}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-center">{player.lvl}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-center">{player.id}</div>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(player.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              </div>
              <div className="ml-2">
                <button
                  onClick={() => handleDelete(player.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
