import AboutMe1 from "../Page/Layout/AboutMe1";
import AboutMe2 from "../Page/Layout/AboutMe2";
import Education1 from "../Page/Layout/Education1";
import Education2 from "../Page/Layout/Education2";
import Experience1 from "../Page/Layout/Experience1";
import Experience2 from "../Page/Layout/Experience2";
import Project1 from "../Page/Layout/Project1";
import Project2 from "../Page/Layout/Project2";
import CV1 from "../Page/Layout/CV1";
import Contact1 from "../Page/Layout/Contact1";
import AboutMe1IMG from "../Asset/About_me_1.png";
import AboutMe2IMG from "../Asset/About_me_2.png";
import Experience1IMG from "../Asset/Experiece_1.png";
import Experience2IMG from "../Asset/Experiece_2.png";

import Education1IMG from "../Asset/Education_1.png";
import Education2IMG from "../Asset/Education_2.png";
import MyCV1IMG from "../Asset/CV_1.png";
import Contact1IMG from "../Asset/Contact_1.png";
import Project1IMG from "../Asset/Project_1.png";
import Project2IMG from "../Asset/Project_2.png";

const aboutMeContainer = [
  { key: "AboutMe0", Component: AboutMe1, id: 0, image: AboutMe1IMG },
  { key: "AboutMe1", Component: AboutMe2, id: 1, image: AboutMe2IMG },
];
const educationContainer = [
  { key: "Education0", Component: Education1, id: 100, image: Education1IMG },
  { key: "Education1", Component: Education2, id: 101, image: Education2IMG },
];
const experienceContainer = [
  {
    key: "experience0",
    Component: Experience1,
    id: 200,
    image: Experience1IMG,
  },
  {
    key: "experience1",
    Component: Experience2,
    id: 200,
    image: Experience2IMG,
  },
];
const Project = [
  { key: "Project0", Component: Project1, id: 300, image: Project1IMG },
  { key: "Project1", Component: Project2, id: 300, image: Project2IMG },
];
const CVContainer = [{ key: "CV0", Component: CV1, id: 400, image: MyCV1IMG }];
const ContactContainer = [
  { key: "Contact0", Component: Contact1, id: 500, image: Contact1IMG },
];
export {
  aboutMeContainer,
  educationContainer,
  experienceContainer,
  Project,
  CVContainer,
  ContactContainer,
};
