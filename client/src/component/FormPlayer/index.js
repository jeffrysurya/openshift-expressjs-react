import React from "react";
import { useState } from "react";
import { uid } from "uid";
import ListPlayer from "../ListPlayer";

export default function Player() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Jeffry Suryadharma",
      username: "jeffrysurya",
      email: "suryadharma2@gmail.com",
      experience: "100",
      lvl: "123",
    },
    {
      id: 2,
      name: "Esmeralda",
      username: "esmeralda",
      email: "esmeralda@gmail.com",
      experience: "100",
      lvl: "254",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    experience: "",
    lvl: "",
  });

  function handleChange(e) {
    let newFormState = { ...formData };
    newFormState[e.target.name] = e.target.value;
    setFormData(newFormState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...players];

    if (formData.name === "" || formData.username === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((player) => {
        if (player.id === isUpdate.id) {
          player.name = formData.name;
          player.username = formData.username;
          player.email = formData.email;
          player.experience = formData.experience;
          player.lvl = formData.lvl;
        }
      });
      alert("Data berhasil diupdate");
    } else {
      let toSave = {
        id: uid(),
        name: formData.name,
        username: formData.username,
        email: formData.email,
        experience: formData.experience,
        lvl: formData.lvl,
      };
      data.push(toSave);
      alert("Data berhasil disimpan");
    }
    setPlayers(data);
    setIsUpdate(false);
    setFormData({ id: "",name: "", username: "", email: "", experience: "", lvl: "" });
  }

  function handleEdit(id) {
    let data = [...players];
    let foundData = data.find((player) => player.id === id);
    setIsUpdate({ status: true, id: id });
    setFormData({
      id: foundData.id,
      name: foundData.name,
      username: foundData.username,
      email: foundData.email,
      experience: foundData.experience,
      lvl: foundData.lvl,
    });
  }
  function handleDelete(id) {
    let data = [...players];
    let filteredData = data.filter((player) => player.id !== id);

    setPlayers(filteredData);
    alert("Data berhasil dihapus");
  }

  return (
    <div>
      <h1 className="mb-3">Form Add Player</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">UUID</label>
          <input
            type="text"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.id}
            id="id"
            name="id"
            placeholder="Your ID"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.name}
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.username}
            id="username"
            name="username"
            placeholder="Your Username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.email}
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="experience">Experience</label>
          <input
            type="experience"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.experience}
            id="experience"
            name="experience"
            placeholder="Your Experience"
          />
        </div>
        <div>
          <label htmlFor="lvl">Level</label>
          <input
            type="lvl"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            onChange={handleChange}
            value={formData.lvl}
            id="lvl"
            name="lvl"
            placeholder="Your Level"
          />
        </div>
        <div className="flex mt-6">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            Save
          </button>
        </div>
      </form>

      <div className="mt-24 mb-36">
        <h3 className="mb-4">List Data Players</h3>
        <ListPlayer
          data={players}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
