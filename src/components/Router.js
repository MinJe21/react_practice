import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./List.js";
import Create from "./Create.js";
import Detail from "./Detail.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<List />} />
        <Route path='/list' element={<List />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}