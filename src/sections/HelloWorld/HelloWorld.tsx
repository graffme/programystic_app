import React, { memo, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { FaLinkedinIn, FaMediumM, FaInstagram, FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import styled from "styled-components";

import { Section } from "../../components";

const HelloWorld: React.FC = memo(() => {
  /* Typing effect */
  useEffect(() => {
    let i = 0;
    let j = 0;
    const txt = 'Hello World. I am Daria. A mobile developer and a ';
    const txt2 = 'coding witch.'
    const speed = 100;
    const typer = document.getElementById("typer");
    const typer2 = document.getElementById("typer2");
    const cursor = document.getElementById("cursor");
    let typer2Active = false;
    let timer: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    if (typer && typer2) {
      typer.innerHTML = '';
      typer2.innerHTML = '';
      typer2.classList.remove("active");
    }
    
    const typeWriter = () => {
      if (i < txt.length && typer) {
        typer.innerHTML += txt.charAt(i);
        i++;
        timer = setTimeout(typeWriter, speed);
      } else if (j < txt2.length && typer2) {
        if (!typer2Active) {
          typer2.classList.add("active");
          typer2Active = true;
        }
        typer2.innerHTML += txt2.charAt(j);
        j++;
        timer2 = setTimeout(typeWriter, speed);
      } else {
        if (cursor) cursor.classList.add("blink");
      }
    }

    typeWriter();

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }
  }, []);

  return (
    <StyledHelloWorld
      isDark={true}
      id="section-helloworld"
      className="container-fluid"
    >
      <div className="container">
        { /* eslint-disable-next-line jsx-a11y/heading-has-content */ }
        <h1><span id="typer" className="typer"></span><span id="typer2" className="typer" data-tip data-for='codingWitch'></span><span id="cursor">|</span></h1>
        <p><FaEnvelopeOpenText className="icon" /><a href="mailto:daria.rucka@gmail.com">daria.rucka@gmail.com</a></p>
        <p><FaLinkedinIn className="icon" /><a href="https://www.linkedin.com/in/dariarucka/" target="_blank" rel="noreferrer">dariarucka</a></p>
        <p><FaGithub className="icon" /><a href="https://github.com/programystic-dev" target="_blank" rel="noreferrer">@programystic-dev</a></p>
        <p><FaMediumM className="icon" /><a href="https://medium.com/@dariaruckaolszaska" target="_blank" rel="noreferrer">@dariaruckaolszaska</a></p>
        <p><FaInstagram className="icon" /><a href="https://www.instagram.com/programystic_dev/" target="_blank" rel="noreferrer">@programystic_dev</a></p>
      </div>
      <ReactTooltip id="codingWitch" place="bottom" effect="solid" className="customTooltip">
        <span>Casting spells in Typescript, enchanting VS Code, cursing React.</span>
      </ReactTooltip>
    </StyledHelloWorld>
  );
});
/*
- 2 lines 104px;
1199
- 3 155px;
990
- 2 lines 93px
767
- 3 139px;
513
- 4 186px;
500
- 3 lines 122px;
448
- 4 lines 160 px;
343
- 5 210px;
*/

const StyledHelloWorld = styled(Section)`
  margin-Top: 56px;
  display: flex;
  align-items: center;
  padding: var(--spacing_xl) 0;
  min-height: 75vh;

  h1 {
    margin-bottom: var(--spacing_xl);
    width: 80%;
    height: 104px;

    @media (max-width: 1199px) {
      height: 155px;
    }

    @media (max-width: 900px) {
      width: 100%;
      height: 93px;
    }

    @media (max-width: 767px) {
      height: 140px;
    }

    @media (max-width: 513px) {
      height: 186px;
    }

    @media (max-width: 500px) {
      height: 122px;
    }

    @media (max-width: 448px) {
      height: 160px;
    }

    @media (max-width: 343px) {
      height: 210px;
    }

    @media (max-width: 326px) {
      height: 250px;
    }
  }

  svg {
    margin-right: var(--spacing_sm);
  }

  .typer {
    font-size: var(--h1Size);
    font-weight: var(--headerText);
    color: var(--header);
  }

  #typer2.active {
    background-color: var(--tagBackground);
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    color: var(--tagText);
  }

  #cursor {
    font-size: var(--h1Size);
    font-weight: var(--headerText);
    color: var(--accent);
  }

  .blink {
    animation: blinker 1.5s linear infinite;
  }
  
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .customTooltip {
    color: var(--tooltipText) !important;
    background-color: var(--tooltipBackground) !important;
    max-width: 25%;

    @media (max-width: 900px) {
      max-width: 40%;
    }

    &.place-bottom {
      &:after {
        border-bottom-color: var(--tooltipBackground) !important;
        border-bottom-style: solid !important;
        border-bottom-width: 6px !important;
      }
    }

    span {
      font-weight: var(--boldText) !important;
      font-size: var(--smallText) !important;
    }
  }
`;

export default HelloWorld;
