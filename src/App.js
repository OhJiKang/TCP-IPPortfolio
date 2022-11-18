import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Route";
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
    </Router>
  );
}

export default App;
