import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Content>
                <CTALogoOne src="DISNEY_CLONE_CHALLENGE/images/cta-logo-one.svg"/>
                <Signup>GET ALL THERE</Signup>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display:flex;
align-items: center;
justify-content:center;


&:before {
    background-position:top;
    background-size: cover;
    position:absolute;
    content:"";
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background:url("DISNEY_CLONE_CHALLENGE/images/login-background.jpg");
    no-repeat fixed;
    z-index:-1;
}
`

const Content = styled.div`
max-width: 650px;
padding:80px 40px; 
width:80%;
displayLflex;
flex-direction:column;
`

const CTALogoOne = styled.img`


`

const Signup = styled.a `
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;

`
