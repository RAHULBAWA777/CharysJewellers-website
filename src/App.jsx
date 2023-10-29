import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/HOME/Home';
import AboutUsPage from './PAGES/ABOUT US/AboutUsPage.jsx';
import ContactUsPage from './PAGES/CONTACT US/ContactUsPage';
          {/* ############################        DIAMOND PAGES        ############################# */}
import AllDaimonds from './PAGES/DAIMONDS/AllDaimonds';
import BanglesDaimondPage from './PAGES/DAIMONDS/BanglesDaimondPage';
import BraceletsDaimondPage from './PAGES/DAIMONDS/BraceletsDaimondPage';
import ChainsDaimondPage from './PAGES/DAIMONDS/ChainsDaimondPage';
import PendantsDaimondPage from './PAGES/DAIMONDS/PendantsDaimondPage';
import NecklaceDaimondPage from './PAGES/DAIMONDS/NecklaceDaimondPage';
import MangalsutraDaimondPage from './PAGES/DAIMONDS/MangalsutraDaimondPage';
import VaddanamDaimondPage from './PAGES/DAIMONDS/VaddanamDaimondPage';
import JumkasDaimondPage from './PAGES/DAIMONDS/JumkasDaimondPage';

          {/* ############################        GOLD PAGES        ############################# */}
import AllGoldPage from './PAGES/GOLD PAGES/AllGoldPage';
import GoldBanglesPage from './PAGES/GOLD PAGES/GoldBanglesPage';
import GoldBraceletsPage from './PAGES/GOLD PAGES/GoldBraceletsPage';
import GoldChainsPage from './PAGES/GOLD PAGES/GoldChainsPage';
import GoldChandbaliPage from './PAGES/GOLD PAGES/GoldChandbaliPage';
import GoldChowkersPage from './PAGES/GOLD PAGES/GoldChowkersPage';
import GoldEarringsPage from './PAGES/GOLD PAGES/GoldEarringsPage';
import GoldMangalsutraPage from './PAGES/GOLD PAGES/GoldMangalsutraPage';
import GoldNecklacePage from './PAGES/GOLD PAGES/GoldNecklacePage';
import GoldPendantsPage from './PAGES/GOLD PAGES/GoldPendantsPage';
import GoldRingsPage from './PAGES/GOLD PAGES/GoldRingsPage';
import GoldVaddanamPage from './PAGES/GOLD PAGES/GoldVaddanamPage';
import KundanPage from './PAGES/TRADITIONAL PAGES/KundanPage';
import UncutPolkiPage from './PAGES/TRADITIONAL PAGES/UncutPolkiPage';
import PachiPage from './PAGES/TRADITIONAL PAGES/PachiPage';
import NavaratanPage from './PAGES/TRADITIONAL PAGES/NavaratanPage';
import CharysDesignPage from './PAGES/OUR DESIGNS PAGE/CharysDesignPage';


function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route index element={<Home />} />
          {/* ############################        DIAMOND PAGES        ############################# */}
          <Route path="/alldaimonds" element={<AllDaimonds />} />
          <Route path="/daimondbangles" element={<BanglesDaimondPage />} />
          <Route path="/daimondbracelets" element={<BraceletsDaimondPage />} />
          <Route path="/daimondchains" element={<ChainsDaimondPage />} />
          <Route path="/daimondpendants" element={<PendantsDaimondPage />} />
          <Route path="/daimondnecklace" element={<NecklaceDaimondPage />} />
          <Route path="/daimondmangalsutra" element={<MangalsutraDaimondPage />} />
          <Route path="/daimondvaddanam" element={<VaddanamDaimondPage />} />
          <Route path="/daimondjhumkas" element={<JumkasDaimondPage />} />
          {/* ############################        GOLD PAGES        ############################# */}
          <Route path="/allgolds" element={<AllGoldPage />} />
          <Route path="/goldbangles" element={<GoldBanglesPage />} />
          <Route path="/goldbracelets" element={<GoldBraceletsPage />} />
          <Route path="/goldearrings" element={<GoldEarringsPage />} />
          <Route path="/goldnecklace" element={<GoldNecklacePage />} />
          <Route path="/goldmangalsutra" element={<GoldMangalsutraPage />} />
          <Route path="/goldchains" element={<GoldChainsPage />} />
          <Route path="/goldpendants" element={<GoldPendantsPage />} />
          <Route path="/goldchowkers" element={<GoldChowkersPage />} />
          <Route path="/goldvaddanam" element={<GoldVaddanamPage />} />
          <Route path="/goldchandbali" element={<GoldChandbaliPage />} />
          <Route path="/goldrings" element={<GoldRingsPage />} />

 {/* ############################        TRADITIONAL PAGES        ############################# */}
          <Route path="/kundan" element={<KundanPage />} />
          <Route path="/polki" element={<UncutPolkiPage />} />
          <Route path="/pachi" element={<PachiPage />} />
          <Route path="/navaratan" element={<NavaratanPage />} />
          


          <Route path="/charysdesigns" element={<CharysDesignPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
