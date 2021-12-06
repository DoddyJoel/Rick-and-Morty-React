import React from "react";
import { Route } from "wouter";
import Layout from "./components/layout/Layout";
import SearchResutls from "./pages/Search/SearchResutls";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Layout>
      <Route component={Home} path="/" />
      <Route component={SearchResutls} path="/search/:keyword" />
    </Layout>
  );
}

export default App;
