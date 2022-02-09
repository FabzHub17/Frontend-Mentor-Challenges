import React from "react";

function InteractiveVR() {
  return (
    <section className="interactiveVR">
      <div className="container">
        <div className="interactiveVR-img-wrapper">
          <img
            src={
              process.env.PUBLIC_URL + "/images/mobile/image-interactive.jpg"
            }
            alt="interactive VR"
          />
        </div>

        <div className="interactiveVR-info">
          <h1 className="interactiveVR-heading heading">
            The leader in interactive VR
          </h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default InteractiveVR;
