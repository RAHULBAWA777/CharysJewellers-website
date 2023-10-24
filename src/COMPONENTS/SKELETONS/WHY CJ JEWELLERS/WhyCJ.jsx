import React from 'react'
import styled from 'styled-components'

import p1 from '../../../assets/about cj/pexels-andrea-piacquadio-3830752.jpg'
import p2 from '../../../assets/about cj/pexels-tima-miroshnichenko-6263143.jpg'
import p3 from '../../../assets/about cj/pexels-mathilde-langevin-10897815.jpg'
import p4 from '../../../assets/about cj/pexels-anna-shvets-4672718.jpg'





const WhyCJ = () => {

    return (
        <>


            <WhycjsectionContentLeftImg>
                <WhycjImg>
                    <img src={p1} alt="whyCJimage" />
                </WhycjImg>
                <WhycjPara>
                    <WhyCjHeading>Trust</WhyCjHeading>
                    <p>
                        We’ve come a long way through 25 years of a very strong and loyal bond with our customers.
                        We will forever be grateful and will always give back the best for these lovely people.
                        We design with value and transparency. We get what we deserve and that explains all the trust we’ve achieved.
                    </p>
                </WhycjPara>
            </WhycjsectionContentLeftImg>
            {/* ################################################################## */}
            <WhycjsectionContentRightImg>
                <WhycjPara>
                    <WhyCjHeading>Quality And CraftmanShip</WhyCjHeading>
                    <p>
                        Focusing on intricacy with usability and tradition with sophistication, we strive to create for you-
                        modern styles, stylish ideas while still loyal to our culture and originality.
                    </p>
                </WhycjPara>
                <WhycjImg>
                    <img src={p2} alt="whyCJimage" />
                </WhycjImg>
            </WhycjsectionContentRightImg>
            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
            <WhycjsectionContentLeftImg>
                <WhycjImg>
                    <img src={p3} alt="whyCJimage" />
                </WhycjImg>
                <WhycjPara>
                    <WhyCjHeading>Transparency</WhyCjHeading>
                    <p>
                        We ensure you get the best value for the price you pay and that you pay only what’s necessary for the quality and value you are buying.
                         The processing and making and respective charges will be explained to you all the way, thus nothing hidden.
                        In fact our gems and resources are tested and certified.
                    </p>
                </WhycjPara>
            </WhycjsectionContentLeftImg>
            {/* ################################################################## */}
            <WhycjsectionContentRightImg>
                <WhycjPara>
                    <WhyCjHeading>Relationship</WhyCjHeading>
                    <p>
                        We craft every piece of jewellery with lots of joy and enthusiasm to see your smile as bright as our diamonds! 
                        Our Traditions are what bond us together. We make the best efforts to braid our culture and traditions in the right way to bring out beauty and elegance from within you.
                        We bring out the best out of each other!
                    </p>
                </WhycjPara>
                <WhycjImg>
                    <img src={p4} alt="whyCJimage" />
                </WhycjImg>
            </WhycjsectionContentRightImg>


        </>
    )
}



const WhycjsectionContentLeftImg = styled.div`
/* background-color: red; */
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    padding: 1rem;
    flex-direction: column;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    /* width: 100%;
    height: 50vh; */
}
`

const WhycjsectionContentRightImg = styled.div`
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    padding: 1rem;
    flex-direction: column;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    /* width: 100%;
    height: 50vh; */
}
`
const WhycjImg = styled.div`
width: 50%;
/* background-color: #515181; */

img{
    width: 100%;
    height: 140vh;
}

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
   width: 100%;
   img{
    width: 50%;
    height: 50vh;
   }
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    img{
    width: 100%;
    height: 50vh;
   }
}
`
const WhycjPara = styled.div`
/* background-color: #703131; */
width: 50%;
padding: 6rem;

p{
    font-family: var(--font-word);
    font-size: 2rem;
    font-style: italic;
}


/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
   width: 100%;
   padding: 1rem;


p{
    font-family: var(--font-word);
    font-size: 1.5rem;
    font-style: italic;
}
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {

p{
    font-family: var(--font-word);
    font-size: 1.2rem;
    font-style: italic;
}
}
`
const WhyCjHeading = styled.div`
    font-family: var(--font-heading);
    font-size: 5rem;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    font-size: 3rem;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    font-size: 3rem;
}
`
export default WhyCJ