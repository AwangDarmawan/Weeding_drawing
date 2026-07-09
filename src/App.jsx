import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


import CoverPage from "./Components/Cover/CoverSection";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import PesanAdminPage from "./Pages/PesanAdminPage";






function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<AdminPage/>} />
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />

               <Route path="/:nama" element={<CoverPage/>} />
             <Route path="/home" element={<HomePage />} />
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
