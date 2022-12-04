import AboutMe1 from "../Page/Layout/AboutMe1";
import AboutMe2 from "../Page/Layout/AboutMe2";
import Education1 from "../Page/Layout/Education1";
import Education2 from "../Page/Layout/Education2";
import Experience from "../Page/Layout/Experience";
import Project1 from "../Page/Layout/Project1";
import CV1 from "../Page/Layout/CV1";
import Contact from "../Page/Layout/Contact";
import AboutMe1IMG from "../Asset/About_me_1.png";
import AboutMe2IMG from "../Asset/About_me_2.png";
import Experience1IMG from "../Asset/Experiece_1.png";
import Education1IMG from "../Asset/Education_1.png";
import Education2IMG from "../Asset/Education_2.png";
import MyCV1IMG from "../Asset/CV_1.png";
import Contact1IMG from "../Asset/Contact_1.png";
import Project1IMG from "../Asset/Project_1.png";
const aboutMeContainer = [
  { key: "AboutMe0", component: AboutMe1, id: 0, image: AboutMe1IMG },
  { key: "AboutMe1", component: AboutMe2, id: 1, image: AboutMe2IMG },
];
const educationContainer = [
  { key: "Education0", component: Education1, id: 100, image: Education1IMG },
  { key: "Education1", component: Education2, id: 101, image: Education2IMG },
];
const experienceContainer = [
  { key: "experience0", component: Experience, id: 200, image: Experience1IMG },
];
const Project = [
  { key: "Project0", component: Project1, id: 300, image: Project1IMG },
];
const CVContainer = [{ key: "CV0", component: CV1, id: 400, image: MyCV1IMG }];
const ContactContainer = [
  { key: "Contact0", component: Contact, id: 500, image: Contact1IMG },
];
export {
  aboutMeContainer,
  educationContainer,
  experienceContainer,
  Project,
  CVContainer,
  ContactContainer,
};
