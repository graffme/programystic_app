import React, { memo } from "react";
import { FaLinkedinIn, FaMediumM, FaInstagram, FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import styled from "styled-components";

import { Section } from "../../components";

const HelloWorld: React.FC = memo(() => {
  return (
    <StyledHelloWorld
      isDark={true}
      id="section-helloworld"
      className="container-fluid"
    >
      <div className="container">
        <h1>
          Hello World. I am Daria. A mobile developer and a coding witch.
        </h1>
        <p><FaEnvelopeOpenText className="icon" /><a href="mailto:daria.rucka@gmail.com">daria.rucka@gmail.com</a></p>
        <p><FaLinkedinIn className="icon" /><a href="https://www.linkedin.com/in/dariarucka/" target="_blank" rel="noreferrer">dariarucka</a></p>
        <p><FaGithub className="icon" /><a href="https://github.com/programystic-dev" target="_blank" rel="noreferrer">@programystic-dev</a></p>
        <p><FaMediumM className="icon" /><a href="https://medium.com/@dariaruckaolszaska" target="_blank" rel="noreferrer">@dariaruckaolszaska</a></p>
        <p><FaInstagram className="icon" /><a href="https://www.instagram.com/programystic_dev/" target="_blank" rel="noreferrer">@programystic_dev</a></p>
      </div>
    </StyledHelloWorld>
  );
});

const StyledHelloWorld = styled(Section)`
  margin-Top: 56px;
  display: flex;
  align-items: center;
  padding: var(--spacing_xl) 0;
  min-height: 75vh;

  h1 {
    margin-bottom: var(--spacing_xl);
    width: 80%;
  }

  @media (max-width: 900px) {
    h1 {
      width: 100%;
    }
  }

  svg {
    margin-right: var(--spacing_sm);
  }
`;

export default HelloWorld;
