import React from "react";
import styled from "styled-components";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";

import { infoList } from "../utils/helps";

function Contact() {
  return (
    <Wrapper id="contact">
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

        <div className="contact__extra">
          {infoList.map(item=>{
              const {id,icon,link}=item;
              return <div key={id} className="contact__etc" >
                  <a href={link} target="_blank" rel="noreferrer" >
                      {icon}
                  </a>
              </div>
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1200px;
  margin: auto;
  min-height: 50vh;
  margin-top: 4rem;
  display:flex;
  flex-direction:column;
  .contact__title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .contact__box {
    margin: auto;
    /* padding: 2rem 3rem; */
    max-width: 1200px;
    .contact__item{
        display:flex;
        align-items:center;
        gap:2rem;
        svg{
            font-size:2rem;
        }
    }
    .contact__extra {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .contact__box {
      .contact__extra {
        display: flex;
        justify-content: center;
        gap: 3rem;
        margin-top:4rem;
        font-size: 2rem;
        svg{
            cursor: pointer;
            &:hover{
                transform:scale(1.04)
            }
        }
      }
    }
  }
`;

export default Contact;
