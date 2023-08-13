import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Cookie from "./pages/Cookie";

const App = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Cookie" element={<Cookie />} />
       </Routes>
    </>

  );
};

export default App;
