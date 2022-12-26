import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Route";
import Logo from "./Asset/Logo.svg";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route path={route.path} element={<Page />} key={index}></Route>
            );
          })}
        </Routes>
        <footer
          style={{
            padding: "12px",
            paddingRight: "36px",
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <img src={Logo} alt="ICON Academic Club" width="120" height="70" />
            <span>TCP-IP</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
