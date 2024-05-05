import React from "react";
import styled from "@emotion/styled";

const PackageTitle = styled.div`
  font-size: 16pt;
  color: white;
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const Items = styled.div`
  color: white;
  font-size: 18px;

  
`;
const Logo = styled.i`
  margin-right: 10px;
  color: yellow;
`;
const AddOn = () => {
  return (
    <>
      <PackageTitle className="text-center">
        Add-ons (20% off with Premium Package)
      </PackageTitle>

      <div className="container">
        <div className="row">
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Ozone Treatment
          </Items>
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Paint Sealant
          </Items>
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Engine Detailing
          </Items>
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Pet Hair Removal
          </Items>
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Leather Protection
          </Items>
          <Items className="col-12">
            <Logo className="bi bi-bookmark-plus" />
            Fabric Protection
          </Items>
        </div>
      </div>
    </>
  );
};

export default AddOn;
