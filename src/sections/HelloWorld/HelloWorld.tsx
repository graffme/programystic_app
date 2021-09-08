import React, { memo } from "react";

import { Button, Section } from "../../components";

const HelloWorld: React.FC = memo(() => {
  return (
    <Section
      isDark={true}
      id="section-helloworld"
      className="container-fluid"
      style={{
        height: "800px",
        paddingTop: "55px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2 className="intro_title">
          Hello World. I am Daria. A mobile developer and a coding witch.
        </h2>
        <p>Email: daria.rucka@gmail.com</p>
        <p>LinkedIn: daria.rucka@gmail.com</p>
        <p>Github: daria.rucka@gmail.com</p>
        <p>Medium: daria.rucka@gmail.com</p>
        <p>Instagram: daria.rucka@gmail.com</p>
        <Button onClick={() => console.log("Hello")}>
          Download CV.pdf
        </Button>
      </div>
    </Section>
  );
});

export default HelloWorld;
