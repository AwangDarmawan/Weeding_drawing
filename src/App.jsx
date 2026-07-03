import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


import CoverPage from "./Components/Cover/CoverSection";
import HomePage from "./Pages/HomePage";






function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
           {/* <Route path="/" element={<Adminpage/>} />
               <Route path="/admin/pesan" element={<PesanAdminPage/>} /> */}

               <Route path="/" element={<CoverPage/>} />
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
