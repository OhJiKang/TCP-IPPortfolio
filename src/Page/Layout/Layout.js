import { useState } from "react";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import Education1 from "./Education1";
import Education2 from "./Education2";
import Experience from "./Experience";
import Project from "./Project";

function Layout() {
    return (
        <>
        <AboutMe1/>
        <AboutMe2/>
        <Education1/>
        <Education2/>
        <Experience/>
        <Project/>
        </>
    )
}

export default Layout;