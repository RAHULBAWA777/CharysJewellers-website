import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/HOME/Home';
import AboutUsPage from './PAGES/ABOUT US/AboutUsPage.jsx';
import ContactUsPage from './PAGES/CONTACT US/ContactUsPage';
import AllDaimonds from './PAGES/DAIMONDS/AllDaimonds';

function App() {
  

  return (
    <>
    <Router>
        <Routes>

          <Route index element={<Home/>} />
          <Route path="/alldaimonds" element={<AllDaimonds />} />
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
