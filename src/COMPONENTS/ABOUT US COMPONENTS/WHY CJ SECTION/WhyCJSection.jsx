import React from 'react'
import WhyCJ from '../../SKELETONS/WHY CJ JEWELLERS/WhyCJ'
import styled from 'styled-components'





const WhyCJSection = () => {
    return (
        <>

            <Whycjsection className='outline'>
                <b> Why NIKARA Jewellers?</b>
                <br />
                <br />
                <Whycjpara>
                    Offoo! Looks like your mind rung up a wonderful design idea huh? Seeking to consult on getting it made? NIKARA jewellers is here, so what are you waiting for? Let’s hear your idea and pull your dream to reality!

                    Ours is a legacy of over 25 years in the Jewellery industry. While being in sync with the emerging trends and constantly reinventing, our core values of trust and customer service remain unchanged.
                </Whycjpara>
                <br />
                <Whycjsectioncontainer>

                    <WhyCJ />

                </Whycjsectioncontainer>

            </Whycjsection>

        </>
    )
}


const Whycjsection = styled.div`
text-align: center;
font-family: var(--font);
color: var(--color-theme);
width: 100%;
padding: 6rem;
height: fit-content;
font-size: 5rem;


/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    padding: 1rem;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    width: 100%;
 
    font-size: 3rem;
}
`

const Whycjpara = styled.div`
font-size: 2rem;

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    /* width: 100%; */
 
    font-size: 1rem;
}
`
const Whycjsectioncontainer = styled.div`
/* background-color: aquamarine; */
height: fit-content;
`


export default WhyCJSection