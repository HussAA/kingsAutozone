import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background: #24262b;
  text-align: center;
  min-height: 150px;
  padding: 35px;
`;
const FooterBottom = styled.div`
  min-height: 35px;
  background: #1B1D21;
`;
const Icon = styled.i`
  font-size: 20px;
  margin: 10px;
  color: white;
`;
const Footerlink = styled.a`
  font-size: 15px;
  margin: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const MyLink = styled.a`
    text-decoration: none;
`;
const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <>
      <FooterContainer>
        <div>
          <Icon className="bi bi-facebook" />
          <Icon className="bi bi-instagram" />
          <Icon className="bi bi-google" />
        </div>
        <div className="p-3">
          <Footerlink href="#About">About</Footerlink>
          <Footerlink href="#">Book now</Footerlink>
          <Footerlink href="#Packages" >Packages</Footerlink>
          <Footerlink href="#Services">Our Services</Footerlink>
          <Footerlink onClick={scrollTop}>Back To Top</Footerlink>
        </div>
      </FooterContainer>
      <FooterBottom>
        <div className="text-center p-2" style={{ color: "white", fontSize: 15 }}>
          Copyright © {new Date().getFullYear()}; Built by <MyLink target="_blank" rel="noreferrer" href="https://hussainalnakhli.com/">Hussain Alnakhli</MyLink>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;
