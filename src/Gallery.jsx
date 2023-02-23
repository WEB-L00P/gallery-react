import React from "react";

const Gallery = (props) => {
  return (
    <>
      <div className="gallery mx-auto" key={props.id}>
        <div className="w-full">
          <img className="rounded-lg" src={props.img} alt={props.title} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
