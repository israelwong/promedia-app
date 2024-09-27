"use client";
import { Fade } from "react-awesome-reveal";
import React from "react";

function HookServicios() {
  return (
    <div>
      <div className="mx-auto max-w-screen-sm md:pt-0 pt-5 md:pb-12 pb-2">
        <Fade>
          <h2
            className="font-Bebas-Neue text-center md:text-4xl 
          text-3xl text-gray-400 px-16"
          >
            Te presentamos{" "}
            <span className="underline text-yellow-900">agunos servicios</span>{" "}
            que creemos que sumarán al éxito de tu proyecto
          </h2>
        </Fade>
      </div>
    </div>
  );
}

export default HookServicios;
