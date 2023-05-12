// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleDog from "./pages/SingleDog";

import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
