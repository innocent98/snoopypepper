import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Top from "./components/top/Top";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Utilities from "./components/utilitis/Utilities";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Airdrop from "./components/airdrop/Airdrop";

function App() {
  const [menu, setMenu] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="">
          <Sidebar setMenu={setMenu} menu={menu} />
          <Top setMenu={setMenu} />
          <Intro />
          <About />
          <Utilities />
          <Contact />
        </div>
      ),
    },
    {
      path: "/airdrop",
      element: (
        <div className="main">
           <Sidebar setMenu={setMenu} menu={menu} />
          <Airdrop setMenu={setMenu} menu={menu} />
        </div>
      ),
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
