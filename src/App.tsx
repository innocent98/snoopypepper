import React from "react";
import { useState } from "react";
import "./App.scss";
import Top from "./components/top/Top";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Utilities from "./components/utilitis/Utilities";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="main">
      <Sidebar setMenu={setMenu} menu={menu} />
      <Top setMenu={setMenu} />
      <Intro />
      <About />
      <Utilities />
      <Contact />
    </div>
  );
}

export default App;
