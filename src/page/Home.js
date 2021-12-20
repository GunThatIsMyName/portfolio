import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero2 from '../components/Hero2'

function Home() {
    return (
        <Wrapper>
            <Hero2 />
            <About />
            <Skills />
            <Projects />
        </Wrapper>
    )
}

const Wrapper = styled.section`
`;

export default Home
