import React from "react";
import styled from "styled-components";
import heroImage from "../images/heroImage.png";

function HeroCss() {
  return (
    <Wraper image={heroImage}>
      <div id="heroItem"></div>
      <div id="shadow"></div>
    </Wraper>
  );
}

const Wraper = styled.div`
  position: relative;
  #heroItem {
    margin: 0 auto;
    position: relative;
    width: 450px;
    height: 550px;
    background-color: #fae4a8;
    background: url(${(props) => props.image}) center/cover no-repeat;
    animation: float 2s infinite;
  }

  #shadow {
    position: absolute;
    bottom: 20px;
    left: 40%;
    margin: 10px auto 0;
    background: #434343;
    width: 150px;
    height: 20px;
    border-radius: 50%;
    animation: zoom 2s infinite;
  }

  @media screen and (max-width:768px){
    #heroItem{
        height:330px;
    }
    #shadow{
        bottom: 0px;
        width:100px; 
    }
}
@media screen and (max-width:480px){
    #heroItem{
        width:200px;
        height:230px;
    }
    #shadow{
        bottom: 10px;
        width:30px; 
        height:5px;
    }
  }

  @keyframes float {
    0%,
    100% {
      transfrom: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
  }
  @keyframes zoom {
    0%,
    100% {
      transform: scale(2);
    }
    50% {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width:991px){
    #heroItem{ 
      width: 350px;
      height: 350px;
    }
  }
  @media screen and (max-width:480px){
    #heroItem{ 
      width: 200px;
      height: 200px;
    }
  }
`;

export default HeroCss;
