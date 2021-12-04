import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import ListOfCharacter from "./components/ListOfCharacter";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Layout setSearch={setSearch}>
      <ListOfCharacter search={search} />
    </Layout>
  );
}

export default App;
