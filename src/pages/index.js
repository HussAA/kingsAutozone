import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";
import Packages from "../components/Packages";
import Services from "../components/Services";
import LandingSection from "../components/LandingSection";

const ServiceSection = styled.section`
  /* background: #16192c;
  padding-top: 30px;
  padding-bottom: 30px; */
`;

const IndexPage = () => {
  return (
    <>
      <header>
        <section style={{minHeight:"100px"}}>
          <AppNavBar />
        </section>
      </header>
      <body>
        <section>
          <LandingSection/>
        </section>
        <section style={{marginTop:"200px"}}>
          <AboutUs />
        </section>
        <section style={{marginTop:"200px"}}>
          <Packages />
        </section>
        <ServiceSection style={{marginTop:"200px", marginBottom:"100px"}}>
          <Services />
        </ServiceSection>

      </body>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
