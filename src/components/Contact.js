import React from "react";
import styled from "styled-components";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiKakaotalk, SiNotion } from "react-icons/si";


  const notion ={
    id: 2,
    icon: <SiNotion />,
    name:"Notion Resume",
    link: "https://adaptive-otter-f22.notion.site/adff99a2dff847c19218da6de56bc230",
  }

function Contact() {
  return (
    <Wrapper id="contact">
      <section className="contact">
        <h4 className="contact__title">contact</h4>

        <div className="contact__box">
          <div className="contact__item contact__email">
            <MdEmail />
            <h3 className="contact__myemail">dlwnsgus96@naver.com</h3>
          </div>

          <div className="contact__item contact__location">
            <MdLocationOn />
            <h3 className="contact__mylocation">대한민국 서울</h3>
          </div>

          <div className="contact__item contact__kakao">
            <SiKakaotalk />
            <h3 className="contact__mykakao">dlwnsgus96</h3>
          </div>
        </div>
        <div className="contact__resume">
          <h4>Resume : </h4>
          <a target="_blank" rel="noreferrer" className="resume__btn" href={notion.link}>
            Click   {notion.icon}
          </a>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #fcf7e1;
  min-height: 70vh;
  .contact {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .contact__title {
    margin-top: 5rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .contact__resume{
    margin-top:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    h4{
      margin-right:10px;
    }
    .resume__btn{
      background:#EC9846;
      display:flex;
      align-items:center;
      color:white;
      padding:8px 16px;
      border-radius:5px;
      transition:0.3s linear;
      &:hover{
        background:#fff;
        color:#EC9846;
      }
      svg{margin-left:10px;}
    }
  }
  .contact__box {
    margin: auto;
    max-width: 1200px;
    .contact__item {
      display: flex;
      align-items: center;
      gap: 2rem;
      svg {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contact__title {
      margin:1rem 0;
    }
  }
`;

export default Contact;
