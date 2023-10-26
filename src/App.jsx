import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/HOME/Home';
import AboutUsPage from './PAGES/ABOUT US/AboutUsPage.jsx';
import ContactUsPage from './PAGES/CONTACT US/ContactUsPage';
import AllDaimonds from './PAGES/DAIMONDS/AllDaimonds';
import BanglesDaimondPage from './PAGES/DAIMONDS/BanglesDaimondPage';
import BraceletsDaimondPage from './PAGES/DAIMONDS/BraceletsDaimondPage';
import ChainsDaimondPage from './PAGES/DAIMONDS/ChainsDaimondPage';
import PendantsDaimondPage from './PAGES/DAIMONDS/PendantsDaimondPage';
import NecklaceDaimondPage from './PAGES/DAIMONDS/NecklaceDaimondPage';
import MangalsutraDaimondPage from './PAGES/DAIMONDS/MangalsutraDaimondPage';
import VaddanamDaimondPage from './PAGES/DAIMONDS/VaddanamDaimondPage';
import JumkasDaimondPage from './PAGES/DAIMONDS/JumkasDaimondPage';

function App() {
  

  return (
    <>
    <Router>
        <Routes>

          <Route index element={<Home/>} />
          <Route path="/alldaimonds" element={<AllDaimonds />} />
          <Route path="/daimondbangles" element={<BanglesDaimondPage/>} />
          <Route path="/daimondbracelets" element={<BraceletsDaimondPage/>} />
          <Route path="/daimondchains" element={<ChainsDaimondPage/>} />
          <Route path="/daimondpendants" element={<PendantsDaimondPage/>} />
          <Route path="/daimondnecklace" element={<NecklaceDaimondPage/>} />
          <Route path="/daimondmangalsutra" element={<MangalsutraDaimondPage/>} />
          <Route path="/daimondvaddanam" element={<VaddanamDaimondPage/>} />
          <Route path="/daimondjhumkas" element={<JumkasDaimondPage/>} />

          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
         
        </Routes>
      </Router>
    </>
  )
}

export default App
