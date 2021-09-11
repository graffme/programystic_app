import React, { memo } from "react";
import { importMDX } from "mdx.macro";
import styled from "styled-components";

import { Button, Section } from "../../components";

const Content = React.lazy(() => importMDX("./ExperienceContent.mdx"));

const Experience: React.FC = memo(() => {
  return (
    <StyledExperience
      isDark={false}
      id="section-experience"
      className="container-fluid"
    >
      <div className="container">
        <h1>Experience</h1>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>

        <div className="highlight-download-cv">
          <div className="wrapper">
            <p className="bulb">💡</p>
            <p className="download_cv_text">
              If you are interested in my whole experience please download my
              CV in pdf format.
            </p>
          </div>
          <Button onClick={() => null}><a href={process.env.PUBLIC_URL + '/CV.pdf'} target='_blank' rel='noopener noreferrer'>Download CV.pdf</a></Button>
        </div>
      </div>
    </StyledExperience>
  );
});

const StyledExperience = styled(Section)`
  padding: var(--spacing_xl) 0;

  h1 {
    margin-bottom: var(--spacing_xl);
  }

  h2 {
    margin-bottom: var(--spacing_sm);
  }

  ul {
    margin-top: var(--spacing_md);
    margin-bottom: var(--spacing_xl);
    margin-left: var(--spacing_sm);
  }

  ul li {
    margin-bottom: var(--spacing_xs);
  }

  span {
    font-size: var(--smallText);
    font-weight: var(--boldText);
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    color: var(--tagText);
    background-color: var(--tagBackground);
  }

  hr {
    color: var(--accent);
  }

  .highlight-download-cv {
    padding: var(--spacing_md) var(--spacing_lg);
    background-color: var(--tagBackground);
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .bulb,
    .download_cv_text {
      margin: 0;
    }

    .download_cv_text a {
      font-weight: 400;
    }

    a {
      color: white;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .bulb {
      font-size: 1.5rem;
      margin-right: var(--spacing_sm);
    }
  }

  @media (max-width: 900px) {
    .highlight-download-cv {
      padding: var(--spacing_md) var(--spacing_sm);
      flex-direction: column;

      .wrapper {
        margin-bottom: var(--spacing_lg);
        flex-direction: column;
        align-items: center;
      }

      .download_cv_text {
        text-align: center;
      }
    }
  }
`;

export default Experience;
