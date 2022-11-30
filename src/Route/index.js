import Home from "../Page/Home";
import Build from "../Page/Build";
import Edit from "../Page/Edit/";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/build", component: Build },
  { path: "/edit", component: Edit },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
