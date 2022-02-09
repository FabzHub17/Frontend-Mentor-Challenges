import React from "react";
import CreationComponent from "./CreationComponent";

function Creations() {
  const componentInfo = [
    {
      imgSrc: "image-deep-earth.jpg",
      heading: "deep earth",
    },
    {
      imgSrc: "image-night-arcade.jpg",
      heading: "night arcade",
    },
    {
      imgSrc: "image-soccer-team.jpg",
      heading: "soccer team vr",
    },
    {
      imgSrc: "image-grid.jpg",
      heading: "the grid",
    },
    {
      imgSrc: "image-from-above.jpg",
      heading: "from up above vr",
    },
    {
      imgSrc: "image-pocket-borealis.jpg",
      heading: "pocket borealis",
    },
    {
      imgSrc: "image-curiosity.jpg",
      heading: "the curiosity",
    },
    {
      imgSrc: "image-fisheye.jpg",
      heading: "make it fisheye",
    },
  ];

  return (
    <>
      <section className="creations">
        <div className="container">
          <h1 className="creations-heading heading"> Our creations</h1>
          <button className="creations-btn desktop">see all</button>

          {componentInfo.map((itemInfo, index) => {
            return (
              <div className="componentMobile mobile">
                <CreationComponent
                  key={index}
                  img={`/images/mobile/${itemInfo.imgSrc}`}
                  title={itemInfo.heading}
                />
              </div>
            );
          })}
          <button className="creations-btn mobile">see all</button>

          {componentInfo.map((itemInfo, index) => {
            return (
              <div className="componentsDesktop desktop">
                <CreationComponent
                  key={index}
                  img={`/images/desktop/${itemInfo.imgSrc}`}
                  title={itemInfo.heading}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Creations;
