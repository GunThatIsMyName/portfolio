import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Main from "./page/Main";

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Info />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
