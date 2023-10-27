import React from 'react'
import WhyCJ from '../../SKELETONS/WHY CJ JEWELLERS/WhyCJ'
import styled from 'styled-components'





const WhyCJSection = () => {
    return (
        <>

            <Whycjsection className='outline'>
                <b> Why Charys Jewellers?</b>
                <br />
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
color: var(--color-bg);
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
const Whycjsectioncontainer = styled.div`
/* background-color: aquamarine; */
height: fit-content;
`


export default WhyCJSection