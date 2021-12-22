import { Helmet } from "react-helmet";
import { Info, Navbar } from "./components";
import Home from "./page/Home";

function App() {
  return (
    <>
    <Helmet>
      <title>ㅁㄴ이르ㅏㅁㄴ으라ㅣㅁㄴ으리ㅏㅡㅁㄴ이ㅏㄹㅁ니ㅏ인ㅇ리ㅏㅡ</title>
    </Helmet>
      <Navbar />
      <Info />
      <Home />
    </>
  );
}

export default App;
