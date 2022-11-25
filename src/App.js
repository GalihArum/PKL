import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Editkuota from './pages/Editkuota';
import Pengajuan from './pages/Pengajuan';
import PengajuanProfile from './pages/PengajuanProfile';
import TambahPengjuan from './pages/TambahPengajuan';
import Form from './pages/Form';
import Logout from './pages/Logout';
import axios from 'axios';
import FormBidangKeahlian from './pages/FormBidangKeahlian';

function App() {

  (function() {
    const token = localStorage.getItem('ap_data') ? JSON.parse(localStorage.getItem('ap_data')).token : undefined
    if(token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
  })();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editkuota" element={<Editkuota />} />
        <Route path="/editkuota/:id" element={<FormBidangKeahlian />} />
        <Route path="/pengajuan" element={<Pengajuan />} />
        <Route path="/tambah" element={<TambahPengjuan/>} />
        <Route path="/profile/:id" element={<PengajuanProfile />} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
