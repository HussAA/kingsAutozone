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
  display: flex;
`;
const Logo = styled.i`
  margin-right: 8px;
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
                <div className="col-8">
                  <Items className="col-12">
                    <Logo className="bi bi-bookmark-check" />
                    {v}
                  </Items>
                </div>
                <div className="col-4">
                  <div>
                    
                    <Logo className="bi bi-arrow-right"/>
                    <Price className="ms-1">{price}</Price>
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

      <div className="container noPadding">
        <div className="row">
          
          
          
         
          
          <AddonList texts={["Pet Hair"]} price={["$50"]}/>
          <AddonList texts={["Engine Shampoo"]} price={["$50 - $60"]}/>
          <AddonList texts={["Toddler seat clean"]} price={["$20"]}/>
          <AddonList texts={["Odor Removal"]} price={["$50"]}/>
          <AddonList texts={["Seats & carpet Shampoo only"]} price={["$75 - $90"]}/>
          <AddonList texts={["Headlight Restoration"]} price={["$99"]}/>
          <AddonList texts={["Decal removal"]} price={["$20"]}/>
        </div>
      </div>
    </>
  );
};

export default AddOn;
