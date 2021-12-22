import { Helmet } from "react-helmet";
import { Info, Navbar } from "./components";
import Home from "./page/Home";

import dream from "./images/dreammobile.png";

function App() {
  return (
    <>
    <Helmet>
      <title>Jun's Journey</title>
      <meta name="description" content="이준현 의 웹사이트 입니다."/>


<meta itemprop="name" content="Jun's Journey"/>
<meta itemprop="description" content="이준현 의 웹사이트 입니다."/>
<meta itemprop="image" content={dream}/>
    </Helmet>
      <Navbar />
      <Info />
      <Home />
    </>
  );
}

export default App;
