import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";

const IndexPage = () => {
  return (
    <>
      <header>
        <section style={{minHeight:"100px", marginTop:"50px"}}>
          <AppNavBar />
        </section>
      </header>
      <body>
        <section>
          <AboutUs />
        </section>
      </body>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
