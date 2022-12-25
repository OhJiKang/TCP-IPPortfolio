import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Route";
import iconFinal from "./Asset/iconFinal.png";

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
      </div>
      <footer style={{
            padding: "12px",
            paddingRight: "36px",
            zIndex: 100
        }} >
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
            }}>
                <img src={iconFinal} alt="ICON Academic Club" width="120" height="70" /> 
                <span>TCP-IP</span>
            </div>
      </footer>   
    </Router>
  );
}

export default App;
