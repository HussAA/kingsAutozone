import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px; /* Adjust the height as needed */

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const LeftHalf = styled.div`
min-height: 410px;
  box-sizing: border-box;
  justify-content: space-between; /* Background color for the left half */
`;

const RightHalf = styled.div`
    min-height: 410px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 70vh;
  
`;

const Title = styled(Typography)`
  min-height: 260px;
  align-items: center;
  font-family: sans-serif;
`;

const LeftText = styled.div`
  background: #202020;
  min-height: 150px;
  padding: 20px;
  color: lightgray;
  font-family: sans-serif;
`;

const AboutUs = () => {
  return (
    // <Container>
    //   <SectionContainer>
    //     <LeftHalf>
    //       <Title variant="h4">Title at Top Left</Title>
    //       <Text variant="body1">Text at Bottom Left</Text>
    //     </LeftHalf>
    //     <RightHalf className="carpic"/>
    //   </SectionContainer>
    // </Container>

    <div className="container-sm">
      <div className="row">

        <LeftHalf className="col-md-5">

          <Title className="row">
            <div className="col h4 fs-2">About Us</div>
          </Title>

          <LeftText className="row">
            <div className="col">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </LeftText>
        </LeftHalf>

        <RightHalf className="col-md-7 carpic"/>
      </div>
    </div>
  );
};

export default AboutUs;
