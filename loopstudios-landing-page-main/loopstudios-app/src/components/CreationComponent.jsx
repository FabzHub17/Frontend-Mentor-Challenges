import React from "react";

function CreationComponent(props) {
  return (
    <>
      <div className="component-wrapper">
        <img
          className="component-img"
          src={process.env.PUBLIC_URL + props.img}
          alt=""
        />
        <h2 className="component-heading heading">{props.title}</h2>
      </div>
    </>
  );
}

export default CreationComponent;
