import React from "react";
import styled from "styled-components";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";
import { ContactEtc } from ".";

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

        {/* <ContactEtc /> */}
      </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #FCF7E1;
  min-height: 60vh;
  .contact{
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
`;

export default Contact;
