import Links from './Components/Links/Links';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Foooter/Footer';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import


function App() {
  return (
    <>
      <Router>
        <Links />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
