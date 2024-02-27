import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Actor from "./components/Actor";
import Home from "./components/Home";
import Episode from "./components/Episode";
import EpisodeDetail from "./components/EpisodeDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="actor" element={<Actor />} />
        <Route path="episode" element={<Episode />}>
          <Route path=":episodeId" element={<EpisodeDetail/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
