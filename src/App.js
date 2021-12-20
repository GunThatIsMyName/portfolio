import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./page/Home";
import Main from "./page/Main";

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Info />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
