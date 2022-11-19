import PageTest1 from "../Page/PageTest1";
import PageTest2 from "../Page/PageTest2";
const publicRoutes = [
  { path: "/", component: PageTest1 },
  { path: "/build", component: PageTest2 },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
