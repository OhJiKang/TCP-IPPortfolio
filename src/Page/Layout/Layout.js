import { useState } from "react";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import Contact1 from "./Contact1";
import CV1 from "./CV1";
import Education1 from "./Education1";
import Education2 from "./Education2";
import Experience1 from "./Experience1";
import Experience2 from "./Experience2";
import Project1 from "./Project1";
import Project2 from "./Project2";

function Layout() {
  return (
    <div className="w-[1440px] p-20">
      <AboutMe1 />
      <AboutMe2 />
      <Education1 />
      <Education2 />
      <Experience1 />
      <Experience2 />
      <Project1 />
      <Project2 />
      <Contact1 />
      <CV1 />
    </div>
  );
}

export default Layout;
