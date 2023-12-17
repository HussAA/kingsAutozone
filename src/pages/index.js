import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";
import Packages from "../components/Packages";

const IndexPage = () => {
  return (
    <>
      <header>
        <section style={{minHeight:"100px"}}>
          <AppNavBar />
        </section>
      </header>
      <body>
        <section style={{marginTop:"200px"}}>
          <AboutUs />
        </section>
        <section style={{marginTop:"200px"}}>
          <Packages />
        </section>

      </body>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
