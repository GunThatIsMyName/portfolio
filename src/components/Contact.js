import React from 'react'
import styled from 'styled-components'

function Contact() {

    return (
        <Wrapper>
            <h4 className="contact__title">contact</h4>
            <div className="contact__box">

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width:1200px;
    text-align:center;
    margin:auto;
    min-height:60vh;

`;

export default Contact
