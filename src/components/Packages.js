import React from 'react'
import styled from '@emotion/styled';


const SectionTitles = styled.div`
  font-size: 12pt;
  color: #646363;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #8e8d8d;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;

const BronzeTitle = styled.div`
    background: #CD7F32;
    text-align: center;
    font-size: 35px;
`;
const SilverTitle = styled.div`
    background: silver;
    text-align: center;
    font-size: 35px;
`;
const GoldTitle = styled.div`
    background: gold;
    text-align: center;
    font-size: 35px;
`;
const Price = styled.div`
    text-align: center;
    font-size: 19px;
`;
const ArrowStyle = styled.i`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;

const ListStyle = styled.div`
    
    font-size: 15px;
    color: black;
    margin-bottom: 10px;
`;
const Packages = () => {
  return (
    <>
    <SectionTitles id="Services" className="text-center text-uppercase">
        Packages
      </SectionTitles>
      <SectionHeading>our packages</SectionHeading>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionDescription>
    <div className='container-lg'>
        <div className='row'>
            {/* Bronze package */}
            <div className='col-md-4'>
                <div className='row'>
                    <BronzeTitle className='col'>
                        Bronze
                    </BronzeTitle>
                </div>
                <div className='row'>
                    <div className='col bronze-pic'/>
                </div>
                <div className='row'>
                    <Price className='col my-3'>
                        Starting at $100
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full vaccum including trunk
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Exterior hand wash
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Rim + Wheel cleaning
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Tire cleaning + Tire shine
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Clay bar + Windows cleaning
                    </ListStyle>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        Estimated time - 1.5 hours
                    </div>
                </div>
            </div>
            {/* Silver package */}
            <div className='col-md-4'>
                <div className='row'>
                    <SilverTitle className='col'>
                        Silver
                    </SilverTitle>
                </div>
                <div className='row'>
                    <div className='col silver-pic'/>
                </div>
                <div className='row'>
                    <Price className='col my-3'>
                        Starting at $160
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col fw-bold'>
                        <ArrowStyle className='bi bi-arrow-90deg-down'/>
                        Bronze package, plus
                    </ListStyle>
                </div>

                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Salt + mud/stain removal 
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Carpet & seat shampoo
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full interior detail of hard surfaces 
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Odor protection
                    </ListStyle>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        Estimated time - 2.5 hours
                    </div>
                </div>
            </div>
            {/* Gold package */}
            <div className='col-md-4'>
                <div className='row'>
                    <GoldTitle className='col'>
                        Gold
                    </GoldTitle>
                </div>
                <div className='row'>
                    <div className='col gold-pic'/>
                </div>
                <div className='row'>
                    <Price className='col my-3 '>
                        Starting at $210
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col fw-bold'>
                        <ArrowStyle className='bi bi-arrow-90deg-down'/>
                        Silver package, plus
                    </ListStyle>
                </div>
               
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Ceramic spray wax 
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Leather / Fabric Protection
                    </ListStyle>
                </div>
                
                <div className='row'>
                    <div className='col text-center'>
                        Estimated time - 3.5 hours
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Packages