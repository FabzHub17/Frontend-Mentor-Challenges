import React, { useState } from "react";
import Header from "./Header";
import InteractiveVR from "./InteractiveVR";
import Creations from "./Creations";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <InteractiveVR />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
