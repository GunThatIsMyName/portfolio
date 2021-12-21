import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

function Home() {
    return (
        <Wrapper>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.section`
`;

export default Home
