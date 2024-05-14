import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";

const PackageTitle = styled.div`
  font-size: 18pt;
  color: black;
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const Items = styled.div`
  color: black;
  font-size: 18px;
  text-transform: capitalize;
`;
const Logo = styled.i`
  margin-right: 10px;
  color: black;
`;

const Price = styled.span`
  color: black;
`;
const AddonList = ({ texts, price }) => {
  return (
    <>
      {_.isArray(texts) && (
        <>
          {texts.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-6">
                  <Items className="col-12">
                    <Logo className="bi bi-bookmark-check" />
                    {v}
                  </Items>
                </div>
                <div className="col-6">
                  <div>
                    
                    <Logo className="bi bi-arrow-right"/>
                    <Price className="ms-3">{price}</Price>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
const AddOn = () => {
  return (
    <>
      <PackageTitle className="text-center">Add-on</PackageTitle>

      <div className="container">
        <div className="row">
          
          
          
         
          
          <AddonList texts={["Pet Hair"]} price={["$50.00"]}/>
          <AddonList texts={["Engine Shampoo"]} price={["$50.00 - $60.00"]}/>
          <AddonList texts={["Toddler seat clean"]} price={["$20.00"]}/>
          <AddonList texts={["Odor Removal"]} price={["$50.00"]}/>
          <AddonList texts={["Seats & carpet Shampoo only"]} price={["$75.00 - $90.00"]}/>
          <AddonList texts={["Headlight Restoration"]} price={["$99.00"]}/>
          <AddonList texts={["Decal removal"]} price={["$20.00"]}/>
        </div>
      </div>
    </>
  );
};

export default AddOn;
