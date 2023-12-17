import React from 'react'
import styled from '@emotion/styled';



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
    <div className='container-lg'>
        <div className='row'>
            {/* Bronze package */}
            <div className='col-md-4 border'>
                <div className='row'>
                    <BronzeTitle className='col'>
                        Bronze
                    </BronzeTitle>
                </div>
                <div className='row'>
                    <div className='col bronze-pic'/>
                </div>
                <div className='row'>
                    <Price className='col mb-3'>
                        Starting at $100
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full vaccum of seats, floor and trunk
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Exterior hand wash and towel dry
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Windows clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Tire shine + Rims clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <div className='col'>
                        Estimated time - 1.5 hours
                    </div>
                </div>
            </div>
            {/* Silver package */}
            <div className='col-md-4 border'>
                <div className='row'>
                    <SilverTitle className='col'>
                        Silver
                    </SilverTitle>
                </div>
                <div className='row'>
                    <div className='col silver-pic'/>
                </div>
                <div className='row'>
                    <Price className='col mb-3'>
                        Starting at $160
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full vaccum of seats, floor and trunk
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Exterior hand wash and towel dry
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Windows clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Tire shine + Rims clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Shampoo floor, seats and mats 
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full interior detail + odor protection
                    </ListStyle>
                </div>
                <div className='row'>
                    <div className='col'>
                        Estimated time - 2.5 hours
                    </div>
                </div>
            </div>
            {/* Gold package */}
            <div className='col-md-4 border'>
                <div className='row'>
                    <GoldTitle className='col'>
                        Gold
                    </GoldTitle>
                </div>
                <div className='row'>
                    <div className='col gold-pic'/>
                </div>
                <div className='row'>
                    <Price className='col'>
                        Starting at $80
                    </Price>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full vaccum of seats, floor and trunk
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Exterior hand wash and towel dry
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Windows clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Tire shine + Rims clean
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Shampoo floor, seats and mats 
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full interior detail + odor protection
                    </ListStyle>
                </div>
                <div className='row'>
                    <ListStyle className='col'>
                        <ArrowStyle className='bi bi-bookmark-check-fill'/>
                        Full car buffing 
                    </ListStyle>
                </div>
                <div className='row'>
                    <div className='col'>
                        Estimated time - 2.5 hours
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        Estimated time - 1.5 hours
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Packages