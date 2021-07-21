import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../rockies.jpg";

export default function Home() {
  const [state, setState] = useState({ value: "" });

  useEffect(() => {
    axios
      .get("https://api.countapi.xyz/hit/ievgen.netlify.app/visits")
      .then(function (response) {
        setState(response.data);
        console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <img
        src={image}
        alt="Rockies"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          {" "}
          Hello Friends! I'm Ievgen
        </h1>
      </section>
      <div id="visits"> This page has been visited {state.value} times</div>
    </main>
  );
}
