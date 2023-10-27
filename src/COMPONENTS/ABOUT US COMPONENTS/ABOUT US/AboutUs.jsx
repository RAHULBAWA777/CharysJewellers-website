import React from 'react'
import styled from 'styled-components'
import augirl from '../../../assets/about cj/pexels-steven-arenas-618701.jpg'
import WhyCJSection from '../WHY CJ SECTION/WhyCJSection'


const AboutUs = () => {
    return (
        <>

            <Herosection>
                <Herosectionleft>
                    <Herosectionbanner>
                        <h3 className='caption-heading'>About US</h3>
                        <h1 className='caption-heading'><b>WE'RE ON A MISSION TO REDEFINE LUXURY</b></h1>
                    </Herosectionbanner>
                </Herosectionleft>

                <Herosectionright>
                    <img src={augirl} alt="" />
                </Herosectionright>
            </Herosection>


            <BlurImageSection>
                <Bgimage></Bgimage>
                <Bgtext>
                    <span>"</span>
                    Well, would you look at that! You are now just one step away from your dream! Let’s make you stand out with some outstanding adornments shall we?
                    <br />
                    Don’t we have a lovely tradition of gold and diamonds? Makes us down to earth and feel special being just ourselves. We make the best efforts to braid our culture and traditions in the right way to bring out beauty and elegance. Keeping in mind the dynamic trends and unique new ideas, we strive to create for you modern styles while still loyal to our culture and originality.
                    <br />
                    From latest diamond pendant sets to the Tanmaniyas, from those bridal necklace sets to simple everyday bangle wear we simply recreate your Jewellery needs to suit every occasion.
                    <br />
                    Did you know you could make multi use of a long haram set? You can wear it as a short necklace, a pendant or even as a sleek Vaddanam.
                    <br />
                    Don’t forget to check out our pendant styles! Might just be the one you fall for! We are also up for customization! Any match you want to find for your pendants or chains, or any suggestions of styling you’re looking for- our Jewellery expert is just one call away!
                    <br />
                    Come! Shop at Charys Jewellers, where tradition is what we trust and your trust is our tradition.
                    <span>"</span>
                </Bgtext>
            </BlurImageSection>

            <WhyCJSection />

        </>
    )
}




// ********************************************************         STYLED COMPONENTS            ****************************************************************************

const Herosection = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
    font-family: var(--font);
/* ==========MEDIA QUERIES (medium devices) ========= */
    @media screen and (max-width:1024px) {
   
  }
   /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    flex-direction: column;
}
`
const Herosectionleft = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 70vh;
    background-color: black;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {

}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
  width: 100%;
  height: 30vh;
}
`
const Herosectionbanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: var(--color-bg);
    width: 70%;
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
   
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    width: 90%;
}
`
const Herosectionright = styled.div`
    width: 50%;
    height: 70vh;
/* background-color: aqua; */

img{
    width: 100%;
    height: 100%;
}

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
   
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    width: 100%;
    height: 50vh;
}
`

// ####################################################
const BlurImageSection = styled.div`
width: 100%;
height: 80vh;
background-color: black;
position: relative;
`
const Bgimage = styled.div`
  background-image: url("src/assets/jewel-grid-nav/c.jpeg");
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
 
`
const Bgtext = styled.div`
 background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
  color:var(--color-theme);
  font-weight: bold;
  /* border: 3px solid #f1f1f1; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  height: 80%;
  padding: 20px;
  text-align: left;
  font-family: var(--font-lobster);
  font-weight: 100;
  font-size: 1.5rem;

  span{
    font-size: 2rem;
  }

  /* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    font-size: 1rem;
    width: 90%;
  height: 90%;
  padding: 10px;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    font-size: .9rem;
    width: 90%;
  height: 90%;
  padding: 10px;
}
`


export default AboutUs