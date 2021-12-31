import React from 'react';
import {Container} from 'reactstrap';

const Footer = () => {
    return (
        <Container fluid
            tag="footer"
            className="text-center text-black fixed-bottom p-3"
            style={{backgroundColor:"whitesmoke"}}
        >GetoGit | Made By Akshat, Harsh and Tejas
        </Container>
    )
}

export default Footer;