import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/HOME/Home';
import AboutUsPage from './PAGES/ABOUT US/AboutUsPage.jsx';

function App() {
  

  return (
    <>
    <Router>
        <Routes>

          <Route index element={<Home/>} />
          <Route path="aboutus" element={<AboutUsPage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
