import React from "react";
import Sidebar from "./component/sidebar";
import Card from "./component/card";
import Bg from './assets/bg2.png'
import Res from "./component/res";
import Labels from "./component/labels";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./custom.scss";

function App() {
  return (
    <>
   
    <section className="w-100 h-100 d-inline-flex justify-content-center align-items-center gap-5">
            <Card />
    </section>
    </>
  );
}

export default App;
