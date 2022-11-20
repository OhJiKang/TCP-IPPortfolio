import Home from "../Page/Home";
import Build from "../Page/Build";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/build", component: Build },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
