import React from "react";
import styled from "styled-components";
import {
  FaLinkedinIn,
  FaMediumM,
  FaInstagram,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import { Section } from "../../components";
import { Analytics } from "../../services";

const Footer = () => {
  return (
    <StyledFooter isDark={true}>
      <div className="container">
        <div className="icons-wrapper">
          <a
            onClick={() => Analytics.gaSocialMediaLinkClicked("Email")}
            href="mailto:daria.rucka@gmail.com"
          >
            <FaEnvelopeOpenText className="icon" />
          </a>
          <a
            onClick={() => Analytics.gaSocialMediaLinkClicked("LinkedIn")}
            href="https://www.linkedin.com/in/dariarucka/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            onClick={() => Analytics.gaSocialMediaLinkClicked("Github")}
            href="https://github.com/programystic-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            onClick={() => Analytics.gaSocialMediaLinkClicked("Medium")}
            href="https://medium.com/@dariaruckaolszaska"
            target="_blank"
            rel="noreferrer"
          >
            <FaMediumM className="icon" />
          </a>
          <a
            onClick={() => Analytics.gaSocialMediaLinkClicked("Instagram")}
            href="https://www.instagram.com/programystic_dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
        <span>Copyright © 2021 Programystic. All Rights Reserved.</span>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(Section)`
  padding-top: var(--spacing_sm);
  padding-bottom: var(--spacing_sm);

  .container {
    justify-content: center;
    flex-direction: column;
    display: flex;
  }

  .icons-wrapper {
    justify-content: center;
    display: flex;
    margin-bottom: var(--spacing_sm);
  }

  .icon {
    margin-left: var(--spacing_xs);
    margin-right: var(--spacing_xs);
  }

  span {
    font-size: var(--smallText);
    text-align: center;
  }
`;

export default Footer;
