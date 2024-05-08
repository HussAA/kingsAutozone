import React from "react";
import styled from "@emotion/styled";
import { TawkContext } from "../providers";
const FooterContainer = styled.footer`
  background: #24262b;
  text-align: center;
  min-height: 150px;
  padding: 35px;
`;
const FooterBottom = styled.div`
  min-height: 35px;
  background: #1b1d21;
`;
const Icon = styled.i`
  font-size: 20px;
  margin: 10px;
  color: white;
  transition: 0.2s;
`;
const Footerlink = styled.a`
  font-size: 15px;
  margin: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`;

const MyLink = styled.a`
  text-decoration: none;
  color: gold;
  transition: 0.3s;
  :hover {
    color: yellow;
  }
`;
const Footer = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <FooterContainer>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100070850827354"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <Icon className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/kingsautozone_yeg/"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <Icon className="bi bi-instagram" />
          </a>
          <a
            href="https://www.google.com/search?q=kings+autozone&sca_esv=4a15b0de3d8e6aa3&rlz=1C1CHBF_enCA931CA931&sxsrf=ADLYWIL9htqEBbmwf4wAYyOG7RwrGSfHzQ%3A1715151286619&ei=tiE7ZqW9JbSjptQPgtSZgAo&ved=0ahUKEwil8LK5vP2FAxW0kYkEHQJqBqAQ4dUDCBA&uact=5&oq=kingsautozone&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWtpbmdzYXV0b3pvbmUyDhAuGIAEGLADGMcBGK8BMgkQABiwAxgIGB4yCRAAGLADGAgYHjIJEAAYsAMYCBgeMgkQABiwAxgIGB4yCRAAGLADGAgYHjIJEAAYsAMYCBgeMgkQABiwAxgIGB4yCRAAGLADGAgYHjIJEAAYsAMYCBgeSMMEUABYAHAAeACQAQCYAUygAUyqAQExuAEDyAEAmAIBoAJPmAMA4gMFEgExIECIBgGQBgqSBwExoAfkCA&sclient=gws-wiz-serp#lrd=0x53a01f28a8a42e49:0xd5f3529b268fdf97,1,,,,"
            target="_blank"
            rel="noreferrer"
            aria-label="google"
          >
            <Icon className="bi bi-google" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:Kingsautozone@gmail.com"
            aria-label="email"
          >
            <Icon className="bi bi-envelope-plus" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:+17809383001"
            aria-label="phone"
          >
            <Icon className="bi bi-telephone" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@kingsautozone_yeg"
            aria-label="tiktok"
          >
            <Icon className="bi bi-tiktok" />
          </a>
        </div>
        <div className="p-3 ">
          <Footerlink href="#About">About</Footerlink>
          <Footerlink
            onClick={() => {
              tawkMessenger.toggle();
            }}
            href="#"
          >
            Book Now
          </Footerlink>
          <div className="d-sm-none" />
          <Footerlink href="#Packages">Packages</Footerlink>
          <Footerlink href="#Services">Services</Footerlink>
          <Footerlink onClick={scrollTop}>Back To Top</Footerlink>
        </div>
      </FooterContainer>
      <FooterBottom>
        <div
          className="text-center p-2"
          style={{ color: "white", fontSize: 15 }}
        >
          Copyright © {new Date().getFullYear()}; Built by {""}
          <MyLink
            target="_blank"
            rel="noreferrer"
            href="https://hussainalnakhli.com/"
          >
            Hussain Alnakhli
          </MyLink>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;
