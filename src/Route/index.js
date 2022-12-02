import Home from "../Page/Home";
import Build from "../Page/Build";
import Edit from "../Page/Edit/";
import Layout from "../Page/Layout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/build", component: Build },
  { path: "/edit", component: Edit },
  { path: "/layout", component: Layout},
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
