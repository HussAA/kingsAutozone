import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";
import Packages from "../components/Packages";
import Services from "../components/Services";
import LandingSection from "../components/LandingSection";
import Gallery from "../components/Gallery";
import ScrollArrow from "../components/ScrollButton";
import Pricing from "../components/package";
import Footer from "../components/Footer";

const PricingSection = styled.section`
  background: #1e3f68;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const IndexPage = () => {
  return (
    <>
      <header>
        <section style={{ minHeight: "100px" }}>
          <AppNavBar />
        </section>
      </header>
      <body>
        <section>
          <LandingSection />
        </section>
        <section id="About" style={{ marginTop: "100px", paddingTop: "120px" }}>
          <AboutUs />
        </section>
        <div
          id="Packages"
          style={{ marginTop: "100px", paddingTop: "120px" }}
        >
          <Packages />
        </div>
        <PricingSection style={{ marginTop: "100px", paddingTop: "120px" }}>
          <Pricing />
        </PricingSection>
        <section
          id="Services"
          style={{
            marginTop: "100px",
            marginBottom: "100px",
            paddingTop: "120px",
          }}
        >
          <Services />
        </section>
        <section
          id="Gallery"
          style={{
            marginTop: "100px",
            marginBottom: "100px",
            paddingTop: "120px",
          }}
        >
          <Gallery />
        </section>
        <section>
          <Footer/>
        </section>
        <section>
          <ScrollArrow />
        </section>
      </body>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
