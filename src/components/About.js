import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
        <h1 className="about__title">About</h1>
        <h2 className="about__subtitle">Who Is 준현?</h2>
        <div className="about__section">
            <div className="about__img">
                <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="face" />
            </div>
            <div className="about__me">
                <h3 className="about__info">내일이 더 기대되는 준현이.</h3>
                <p>vI started learning as most self-taught web developers do, through google and youtube videos. Soon after that, I decided to take some Udemy courses.

Even though all the information you may need to know to become a web developer is out there for free, I like Udemy because the courses are well organized, you can download and rewatch the lessons any time you want.</p>
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
min-height:60vh;
margin:3rem auto;
max-width:1200px;
    .about__title{
        font-size:2rem;
    }
    .about__section{
        margin:3rem;
        display:grid;
        grid-template-columns:1fr 1fr;
        .about__img{
            text-align:center;
            img{
                max-width:300px;
                border-radius:10px;
            }
        }
        .about__me{
            text-align:left;
            .about__info{
                margin-bottom:2rem;
            }
        }
    }
`;


export default About;
