

import Navbar from './components/Navbar';
import PasswordGeneratorCard from './components/PasswordGeneratorCard';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomeHoc from './components/HOC/HOME.HOC/Home.Hoc';
import AboutHOC from './components/HOC/ABOUT.HOC/About.HOC';
import ContactHOC from './components/HOC/CONTACT.HOC/Contact.HOC';

function App() {
  return (
  <>
  <div>

    <Routes>
      <Route path="/" element={<HomeHoc/>}/>
      <Route path="/About" element={<AboutHOC/>}/>
      <Route path="/Contact" element={<ContactHOC/>}/>
    </Routes>
  </div>
  </>
  );
}




export default App;
