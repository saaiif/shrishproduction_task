import React from "react";

import "./Insight.css";
const Insight = () => {
  return (
    <div className="insight">
      <section class="text-white body-font ">
        <div class="container px-5 py-24 inContent">
          <div class="mb-5 insheader">
            <h1>
              <b>Why Choose</b> Insight?
            </h1>
          </div>

          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div class="mt-1 icons">
                <i class="far fa-edit"></i>
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-3">
                we're creative
              </h2>
              <div class="w-10 h-1 bg-white rounded mt-2 mb-4"></div>
              <p class="text-base leading-relaxed mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates veniam in sapiente ea sed voluptas.{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div class="mt-1 icons">
                <i class="far fa-clock"></i>
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-3">
                we're punctual
              </h2>
              <div class="w-10 h-1 bg-white rounded mt-2 mb-4"></div>
              <p class="text-base leading-relaxed mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates veniam in sapiente ea sed voluptas.{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div class="mt-1 icons">
                <i class="fas fa-bullseye"></i>
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-3">
                we're responsible
              </h2>
              <div class="w-10 h-1 bg-white rounded mt-2 mb-4"></div>
              <p class="text-base leading-relaxed mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates veniam in sapiente ea sed voluptas.{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div class="mt-1 icons">
                <i class="far fa-smile"></i>
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-3">
                we're friendly
              </h2>
              <div class="w-10 h-1 bg-white rounded mt-2 mb-4"></div>
              <p class="text-base leading-relaxed mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates veniam in sapiente ea sed voluptas.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insight;
