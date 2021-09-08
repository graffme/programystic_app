import React, { memo } from "react";

import { Section } from "../../components";

const Experience: React.FC = memo(() => {
  return (
    <Section
      isDark={false}
      id="section-experience"
      className="container-fluid"
      style={{ height: "1200px", paddingTop: "50px" }}
    >
      <div className="container">
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Section>
  );
});

export default Experience;
