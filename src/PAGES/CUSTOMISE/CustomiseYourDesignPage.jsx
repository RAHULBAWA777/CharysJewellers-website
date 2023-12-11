import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import bar from '../../assets/yellow-bar.png'
// import bird from '../../assets/birds.png'

const CustomiseYourDesignPage = () => {
    const url = `https://wa.me/9882892572?text={customise}`;
    {/* I'm%20interested%20in%20*CHARY%20JEWELLERS* */ }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c1icwjd', 'template_87ucm8n', form.current, 'i-bV_Zl96ylZ4TKUD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // const [customise, setCustomise] = useState({
    //     names: "",
    //     email: "",
    //     number: '',
    //     address: '',
    //     upload: ''
    // })

    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setCustomise({
    //         ...customise,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(customise);
    // }

    return (
        <>
            <Header />
            <CustomiseYourDesignMainDiv>
                <BlurImageSection>
                    <Bgimage></Bgimage>
                    <Bgtext>
                        <b>WELCOME TO CHARYS JEWELLERS</b>
                        <br />
                        <span>"</span>
                        Well, would you look at that! You are now just one step away from your dream! Let’s make you stand out with some outstanding adornments shall we?
                        <br />
                        Don’t we have a lovely tradition of gold and diamonds? Makes us down to earth and feel special being just ourselves. We make the best efforts to braid our culture and traditions in the right way to bring out beauty and elegance. Keeping in mind the dynamic trends and unique new ideas, we strive to create for you modern styles while still loyal to our culture and originality.
                        <br />
                        From latest diamond pendant sets to the Tanmaniyas, from those bridal necklace sets to simple everyday bangle wear we simply recreate your Jewellery needs to suit every occasion.
                        <br />
                        Did you know you could make multi use of a long haram set? You can wear it as a short necklace, a pendant or even as a sleek Vaddanam.
                        <br />
                        Don’t forget to check out our pendant styles! Might just be the one you fall for!
                        We are also up for customization! Any match you want to find for your pendants or chains, or any suggestions of styling you’re looking for- our Jewellery expert is just one call away!
                        <br />
                        Come! Shop at Charys Jewellers, where tradition is what we trust and your trust is our tradition.

                        <span>"</span>
                    </Bgtext>
                </BlurImageSection>
                <FormSection>

                    <h2>Customise Your Design</h2>
                    <br />
                    <img className='cust-image2' src={bar} alt="img bottom" />
                    <br />
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="names">Name*</label>
                            <br />
                            <input type="text" name='names' id='names' required />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email">Email*</label>
                            <br />
                            <input type="email" name='email' id='email' required />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="number">Mobile Number*</label>
                            <br />
                            <input type="number" name="number" id="number" required />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="address">Your Comments*</label>
                            <br />
                            <textarea name="address" id="address" cols="30" rows="5" required ></textarea>
                        </div>
                        <br />
                        {/* <div>
                            <label htmlFor="upload">Upload image of the jewellery you wish to manufacture by us.</label>
                            <br />
                            <input type="file" name="upload" id="upload" required  />
                        </div> */}
                        <br />
                        <div>
                            {/* <button type="submit" value="Send"> */}
                                <a className="button-18" target="_blank" href="https://wa.me/918367322322?text=Hello + Charys Jewellers, + I + just + visited + your + website. + May + I + know + more + about + product + given + below?"><span className='text'> Submit</span></a>
                                {/* Submit
                            </button> */}
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
flex-direction: column;
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
textarea{
    border: 1px solid black;
}
.button-18{
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
border: 2px solid maroon;
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

// ####################################################
const BlurImageSection = styled.div`
width: 100%;
height: 60vh;
background-color: var(--color-bg);
position: relative;
`
const Bgimage = styled.div`
  background-image: url("src/assets/ring.png");
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
 
`
const Bgtext = styled.div`
 background-color: rgb(255, 255, 255); /* Fallback color */
  background-color: rgba(189, 189, 189, 0.7); /* Black w/opacity/see-through */
  color:var(--color-theme);
  font-weight: bold;
  /* border: 3px solid #f1f1f1; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  height: 80%;
  padding: 20px;
  text-align: left;
  font-family: var(--font-lobster);
  font-weight: 100;
  font-size: 1rem;

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
    font-size: .8rem;
    width: 90%;
  height: 90%;
  padding: 10px;
}
`

export default CustomiseYourDesignPage