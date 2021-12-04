import React from "react";
import SearchCharacter from "../SearchCharacter";

const Layout = ({ children, setSearch }) => {
  return (
    <>
      <SearchCharacter setSearch={setSearch} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
