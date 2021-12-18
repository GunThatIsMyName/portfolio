import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero2 from '../components/Hero2'

function Home() {
    return (
        <Wrapper>
            {/* <Hero /> */}
            <Hero2 />
            <About />
            <Projects />
            <Skills />
        </Wrapper>
    )
}

const Wrapper = styled.section`
`;

export default Home
