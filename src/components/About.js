import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      {/* <h1 className="about__title">About</h1>
        <h2 className="about__subtitle">Who Is 준현?</h2> */}
      <div className="about__section">
        <div className="about__img">
          <img
            src="https://ethereum.org/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/81032/hackathon_transparent.png"
            alt="face"
          />
        </div>
        <div className="about__me">
          <h3 className="about__info">내일이 더 기대되는 준현이.</h3>
          <p>
            열성이 많으며 자기 주장이 강하면서 단호하고 지도력과 통솔력이 있다.
            부기능인 Ni(내향 직관)으로 활동적이고 장기적인 계획과 거시적 비전을
            선호한다. 지식에 대한 욕구와 관심이 많으며 특히 직관력을 사용해서
            지적인 자극을 주는 새로운 아이디어에 높은 관심을 가지고 있다. 일
            처리에 있어 사전 준비를 철저히 하며 주기능인 Te(외향 사고)로 논리,
            분석적으로 계획하고 조직하여 체계적으로 추진해 나가는 유형이다. 다른
            사람의 의견에 귀를 기울일 필요가 있으며, 자신과 타인의 감정에 충실할
            필요가 있다.
          </p>
          <p>
            겉보기 특성 - 사교활동에 매우 적극적이며 본인이 직접 모임을 주도하고
            적극적으로 대화의 주도권을 이끌어 나가는 힘이 있는 성격이다.
            이것저것 논리적으로 계산을 하는데도 능숙하고 자기관리능력이 뛰어나
            한마디로 유능한 성격의 대표주자이다. 회사를 비롯한 집단에서도 유능한
            직원, 팀장, 재능 있는 구성원의 이미지를 많이 풍긴다.
          </p>
          <p>
            당연하게도 사회적으로 가장 성공하는 성격 유형이기도 하다.[4] 수는
            전체 인구의 약 1.8%로 적지만 이들의 영향력은 상당히 큰 편. 주로
            기업가, 고위공무원, 정치가, 전문직 직군에 많이 분포한다. 활기찬
            성격에 사교활동을 잘하고, 어려운 도전을 마다하지 않고 즐기며 일과
            친하다보니 성실한 경우가 많은데다 논리정연하게 따지기를 좋아한다.
            통계를 보면 E형(외향형) 중에서 평균 지능 지수(IQ)도 높은 편이다.
          </p>
        </div>
      </div>

      <div className="about__wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
    </svg>
</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
  .about__title {
    font-size: 2rem;
  }
  .about__section {
    margin: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    max-width: 1200px;
    margin:auto;
    padding:0 2rem;
    .about__img {
      display: flex;
      align-items: center;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .about__me {
      text-align: left;
      .about__info {
        margin-bottom: 2rem;
        font-size: 2.5rem;
      }
      p {
        &:nth-child(3) {
          margin: 1rem 0;
        }
      }
    }
  }

/*  */

.about__wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.about__wave svg {
    position: relative;
    display: block;
    width: calc(169% + 1.3px);
    height: 127px;
}

.about__wave .shape-fill {
    fill: #B1BDC5;
}

/*  */

  @media screen and (max-width: 991px) {
    display: flex;
    .about__section {
      grid-template-columns: 1fr;
      padding:0 5rem;
      .about__img {
        display: none;
      }
      .about__me {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about__section {
      padding:0 2rem;
    }
  }
`;

export default About;
