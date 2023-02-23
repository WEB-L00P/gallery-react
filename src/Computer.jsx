import React from "react";
import Gallery from "./Gallery";
import Data from "./data/Computer";

const Computer = () => {
  return (
    <>
      <div className="header mt-10">
        <h1 className="text-center text-3xl font-bold">Computer's</h1>
      </div>
      <div className="images mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {Data.map((image) => (
          <Gallery img={image.link} id={image.id} title={image.title} />
        ))}
      </div>
    </>
  );
};

export default Computer;
