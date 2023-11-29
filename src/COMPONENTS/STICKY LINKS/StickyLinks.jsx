import React from 'react'
import styled from 'styled-components'

const StickyLinks = () => {
    return (
        <>
            <StickyLinksMainContainer>
                <a href="https://www.facebook.com/profile.php?id=100063889551619" target="_blank" rel="noopener noreferrer"> <img width="32" height="32" src="https://img.icons8.com/color/48/facebook.png" alt="facebook-new" /></a>
                <a href="https://www.instagram.com/charysjewellers/" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/color/48/instagram-new.png" alt="instagram-new--v1" /></a>
                <a className="abc-text" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*"> <img width="32" height="32" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" /> </a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" /></a>
                <a href="https://in.pinterest.com/sreesreesrinu/" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/color/48/pinterest--v1.png" alt="pinterest--v1" /></a>

            </StickyLinksMainContainer>
        </>
    )
}


const StickyLinksMainContainer = styled.div`
    /* background-color: aqua; */
    z-index: 11;
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: fixed;
    right: 0px;
    top: 50%;
`
export default StickyLinks