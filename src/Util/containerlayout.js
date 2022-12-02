import AboutMe1 from "../Page/Layout/AboutMe1";
import AboutMe2 from "../Page/Layout/AboutMe2";
import Education1 from "../Page/Layout/Education1";
import Education2 from "../Page/Layout/Education2";
import Experience from "../Page/Layout/Experience";
import Project1 from "../Page/Layout/Project1";
import AboutMe1IMG from "../Asset/About_me_1.png";
import AboutMe2IMG from "../Asset/About_me_2.png";
const aboutMeContainer = [
  { key: "AboutMe0", component: AboutMe1, id: 0, image: AboutMe1IMG },
  { key: "AboutMe1", component: AboutMe2, id: 1, image: AboutMe2IMG },
];
const educationContainer = [
  { key: "Education0", component: Education1, id: 0 },
  { key: "Education1", component: Education2, id: 1 },
];
const experienceContainer = [
  { key: "experience0", component: Experience, id: 0 },
];
const Project = [{ key: "Project0", component: Project1, id: 0 }];
export { aboutMeContainer, educationContainer, experienceContainer, Project };
