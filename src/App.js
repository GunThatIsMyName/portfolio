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

<meta property="og:url" content="https://junsjourney.netlify.app"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Jun's Journey"/>
<meta property="og:description" content="이준현 의 웹사이트 입니다."/>
<meta property="og:image" content=""/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Jun's Journey"/>
<meta name="twitter:description" content="이준현 의 웹사이트 입니다."/>
<meta name="twitter:image" content=""></meta>

    </Helmet>
      <Navbar />
      <Info />
      <Home />
    </>
  );
}

export default App;
