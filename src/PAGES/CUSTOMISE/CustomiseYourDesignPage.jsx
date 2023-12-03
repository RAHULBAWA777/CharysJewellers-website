import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import bar from '../../assets/yellow-bar.png'
import bird from '../../assets/birds.png'

const CustomiseYourDesignPage = () => {

    const [customise, setCustomise] = useState({
        names: "",
        email: "",
        number: '',
        address: '',
        upload: ''
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setCustomise({
            ...customise,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customise);
    }

    return (
        <>
            <Header />
            <CustomiseYourDesignMainDiv>
                <FormSection>
                <img className='cust-image' src={bird} alt="img top" />
                <h2>Customise Your Design</h2>
                <br />
                 <img className='cust-image2' src={bar} alt="img bottom" />
                 <br />
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="names">Name*</label>
                            <br />
                            <input type="text" name='names' id='names' required value={customise.names} onChange={handleInput} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email">Email*</label>
                            <br />
                            <input type="email" name='email' id='email' required value={customise.email} onChange={handleInput} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="number">Mobile Number*</label>
                            <br />
                            <input type="number" name="number" id="number" required value={customise.number} onChange={handleInput} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="address">Address*</label>
                            <br />
                            <textarea name="address" id="address" cols="30" rows="5" required value={customise.address} onChange={handleInput}></textarea>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="upload">Upload image of the jewellery you wish to manufacture by us.</label>
                            <br />
                            <input type="file" name="upload" id="upload" required value={customise.upload} onChange={handleInput} />
                        </div>
                        <br />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </FormSection>
               
            </CustomiseYourDesignMainDiv>
            <Footer />
        </>
    )
}

const CustomiseYourDesignMainDiv = styled.div`
padding: 2rem;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-bg);
font-family: var(--font);
.cust-image2{
    width: 30rem;
}

/* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
    padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-bg);
font-family: var(--font);
.cust-image2{
    width: 20rem;
}
}
`
const FormSection = styled.div`
background-color: var(--color-bg);
color: var(--color-theme);
padding: 2rem;
display: flex;
    flex-direction: column;
    align-items: center;
justify-content: center;
input{
   border: 1px solid black;
}
button{
    background-color: var(--color-theme);
    color: var(--color-bg);
    padding: 0rem 1rem;
}
form{
    display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.2rem;
line-height: 3rem;
border: 2px solid gold;
padding: 1rem;
}
.cust-image{
    width: 20rem;
}

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    background-color: var(--color-bg);
color: var(--color-theme);
padding: 1rem;
display: flex;
    flex-direction: column;
    align-items: center;
justify-content: center;
input{
   border: 1px solid black;
}
button{
    background-color: var(--color-theme);
    color: var(--color-bg);
    /* padding: 0rem 1rem; */
}
form{
    display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1rem;
line-height: 3rem;
border: 2px solid gold;
/* padding: 1rem; */
}
.cust-image{
    width: 20rem;
}
}
`

export default CustomiseYourDesignPage