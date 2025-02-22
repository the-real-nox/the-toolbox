import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./components/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register"/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
