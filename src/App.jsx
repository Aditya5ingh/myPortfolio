import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Link from "./pages/link/Link";
import Error from "./pages/error/Error";
import AllProjects from "./pages/AllProjects/AllProjects";
import Skill1 from "./pages/skills/Skill1";
import Skill2 from "./pages/skills/Skill2";
import Skill3 from "./pages/skills/Skill3";
import Skill4 from "./pages/skills/Skill4";
import Skill from "./pages/skills/Skill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/link" element={<Link />} />
          <Route path="/project" element={<AllProjects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/skill1" element={<Skill1 />} />
          <Route path="/skill2" element={<Skill2 />} />
          <Route path="/skill3" element={<Skill3 />} />
          <Route path="/skill4" element={<Skill4 />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
