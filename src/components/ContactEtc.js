import React from "react";
import styled from "styled-components";
import { infoList } from "../utils/helps";

function ContactEtc() {
  return (
    <Wrapper className="contact__extra">
      {infoList.map((item) => {
        const { id, icon, link } = item;
        return (
          <div key={id} className="contact__etc">
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 4rem;
    font-size: 2rem;
    svg {
      cursor: pointer;
      &:hover {
        transform: scale(1.04);
      }
    }
  }
`;

export default ContactEtc;
