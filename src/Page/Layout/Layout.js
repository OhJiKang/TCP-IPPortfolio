import { useState } from "react";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import Contact from "./Contact";
import CV1 from "./CV1";
import Education1 from "./Education1";
import Education2 from "./Education2";
import Experience1 from "./Experience";
import Project1 from "./Project1";

function Layout() {
  return (
    <div className="w-[1440px] p-20">
      <AboutMe1 />
      <AboutMe2 />
      <Education1 />
      <Education2 />
      <Experience1 />
      <Project1 />
      <Contact />
      <CV1 />
    </div>
  );
}

export default Layout;
