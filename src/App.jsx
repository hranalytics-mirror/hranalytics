import React from "react";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Author from "./pages/Author";
import Layout from "./layout/Layout";
import CommingSoon from "./pages/CommingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<CommingSoon />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/author" element={<Author />} />
      </Route>
    </Routes>
  );
}

export default App;
