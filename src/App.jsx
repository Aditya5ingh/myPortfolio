import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Link from "./pages/link/Link";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/link" element={<Link />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
