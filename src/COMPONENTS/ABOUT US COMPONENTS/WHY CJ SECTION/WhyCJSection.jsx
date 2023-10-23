import React from 'react'
import WhyCJ from '../../SKELETONS/WHY CJ JEWELLERS/WhyCJ'
import styled from 'styled-components'





const WhyCJSection = () => {
    return (
        <>

            <Whycjsection>
                <h1>Why Charys Jewellers?</h1>
                    <br/>
                <Whycjsectioncontainer>
                    
                   <WhyCJ/>

                </Whycjsectioncontainer>

            </Whycjsection>

        </>
    )
}


const Whycjsection = styled.div`
text-align: center;
/* background-color: #4a6d8c; */
width: 100%;
padding: 6rem;
height: fit-content;
h1{
    font-family: var(--font-heading);
    font-size: 5rem;
}

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    padding: 1rem;
}
 /* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    width: 100%;
}
`
const Whycjsectioncontainer = styled.div`
/* background-color: aquamarine; */
height: fit-content;
`


export default WhyCJSection