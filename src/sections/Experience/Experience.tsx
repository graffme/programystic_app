import React, { memo } from "react";
import { importMDX } from 'mdx.macro';

import { Section } from "../../components";

const Content = React.lazy(() => importMDX('./ExperienceContent.mdx'));

const Experience: React.FC = memo(() => {
  return (
    <Section
      isDark={false}
      id="section-experience"
      className="container-fluid"
      style={{ padding: "50px 0px" }}
    >
      <div className="container">
        <h1>Experience</h1>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>

        <span>If you are interested in my whole experience, please download CV.pdf.</span>
      </div>
    </Section>
  );
});

export default Experience;
