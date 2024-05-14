import React from "react";
import styled from "@emotion/styled";
import Logo from "../images/Logo.jpg";

const TermsPage = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px;
  background: #222021;
  padding-bottom: 100px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
`;
const Img = styled.div`
  text-align: center;
`;
const Link = styled.a`
    text-decoration: none;
    font-size: 17px;
    color: gold;
    transition: 0.2s;
    :hover{
        color: darkgoldenrod;
    }
`
const TermsIndex = () => {
  return (
    <TermsPage>
        <Link href="/"><i className="bi bi-arrow-left me-1"/>Home Page</Link>
      <Img>
        <img src={Logo} width={300} height={150} />
      </Img>
      <Heading>Terms and Conditions</Heading>

      <Paragraph>
        <i class="bi bi-star-half me-2" />
        Customers should remove all the personal belongings and other valuable
        items from their vehicle prior to any type of detailing. We are not
        responsible for any lost valuables.
      </Paragraph>
      <Paragraph>
        <i class="bi bi-star-half me-2" />
        Kings Autozone will not accept any liability for any loss or damage to
        any personal any missed-out spots to be done again. property including
        the vehicle being serviced or any belongings contained inside of the
        vehicle.
      </Paragraph>
      <Paragraph>
        <i class="bi bi-star-half me-2" />
        All vehicles are cleaned at the customers own risk and must withstand
        normal cleaning processes. Please let us know if your car has any
        battery or other mechanical issues.
      </Paragraph>
      <Paragraph>
        <i class="bi bi-star-half me-2" />
        We cannot guarantee any firm times when accepting your booking. Our
        detailing times are an estimate only. Each vehicle is different and may
        require more or less time to fulfill the detailing type.
      </Paragraph>
      <Paragraph>
        <i class="bi bi-star-half me-2" />
        We are not responsible for the engine lights or other indicators on the
        dash if you choose a package that includes engine shampoo.
      </Paragraph>
      <Paragraph>
        <i class="bi bi-star-half me-2" />
        Please inspect your vehicle properly before leaving the shop. Let us
        know if you want
      </Paragraph>
      
    </TermsPage>
  );
};

export default TermsIndex;
