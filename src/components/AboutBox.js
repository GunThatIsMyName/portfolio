import React from "react";
import styled from "styled-components";

function AboutBox({ aboutList, listIndex, setIndex, answer }) {
  return (
    <AboutBoxWrapper className="about__box">
      <div className="about__btns">
        {aboutList.map((item) => {
          // change answer variable by click the button
          const { id, question } = item;
          return (
            <button
              className={`about__btn ${listIndex === id - 1 ? "active" : ""}`}
              key={id}
              onClick={() => setIndex(id - 1)}
            >
              {question}
            </button>
          );
        })}
      </div>

      <div className="about__me">
        {/* answer variable change by press the button*/}
        <p>{answer}</p>
      </div>
    </AboutBoxWrapper>
  );
}

const AboutBoxWrapper = styled.div`
  margin-bottom: 20rem;
  display: flex;
  gap: 4rem;
  .about__btns {
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--color-black);
    padding-right: 1rem;
    .about__btn {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      &.active {
        color: var(--color-orange);
        border-left: 4px solid var(--color-orange);
      }
    }
  }
  .about__me {
    flex-basis: 75%;
    p {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    .about__btns {
      border-right: none;
      padding-bottom: 1rem;
      padding-right: 0;
      border-bottom: 2px solid var(--color-black);
      .about__btn {
        border-bottom: 4px solid transparent;
        &.active {
          border-left: none;
        }
      }
    }
  }
`;

export default AboutBox;
