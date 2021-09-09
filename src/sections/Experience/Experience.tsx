import React, { memo } from "react";

import { Section } from "../../components";

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

        <h2>Esvelo (formerly VentureDevs)</h2>

        <h3>Mobile Engineering Manager</h3>
        <span>06.2021 - PRESENT</span><br />
        <span>Managing mobile team in the company.</span>
        <ul>
          <li>Defining and managing processes.</li>
          <li>
            Conducting One on One’s, making sure everyone in the team has what
            they need.
          </li>
          <li>Supporting developers in their career paths.</li>
          <li>
            Creating solutions that simplify the work of the team (technical
            documentation, new solutions like Bitrise instead of App Center).
          </li>
          <li>
            Currently, due to the fact that the company works on crypto
            projects, I learn the technical aspects in this area (Ethereum
            blockchain).
          </li>
        </ul>

        <h3>Trubify / React Native Developer</h3>
        <span>04.2020 - 06.2021</span><br />
        <span>An app for musicians and fans to stream live concerts.</span>
        <ul>
          <li>React Native, Typescript, Firebase.</li>
          <li>Start and configuration of the project.</li>
          <li>Configuration of CI (AppCenter).</li>
          <li>Implementation of new features.</li>
          <li>Great impact on the product.</li>
          <li>
            I was fully responsible for creating a native module based on the
            Streamaxia SDK (video live streaming) for React Native. Used Swift
            and Java.
          </li>
          <li>
            I was fully responsible for the implementation of in-app payments
            for both platforms.
          </li>
          <li>Publishing to Google Play and Apple App Store.</li>
          <li>Testing with Jest and Detox.</li>
        </ul>

        <h3>Lyric / React Native Developer</h3>
        <span>01.2020 - 04.2020</span><br />
        <span>An application similar to Airbnb or Booking.com, offered the booking of exclusive apartments.</span>
        <ul>
          <li>React Native, Typescript, GraphQL.</li>
          <li>Close work with the team in US.</li>
          <li>Implementation of new features.</li>
          <li>Existing code refactor.</li>
          <li>Testing with Jest.</li>
        </ul>

        <h2>Siepomaga.pl</h2>
        <h3>React Native Developer</h3>
        <span>02.2019 - 01.2020</span><br />
        <span>Mobile app for the largest online charity foundation in Poland.</span>
        <ul>
          <li>Full responsibility for the mobile application in React Native.</li>
          <li>Configuration, design, development and maintenance of the app.</li>
          <li>Publishing to Google Play and Apple App Store.</li>
        </ul>

        <h2>Qapp</h2>
        <h3>Noc Naukowców 2019 / React Native Developer</h3>
        <span>06.2019 - 09.2019</span><br />
        <span>Mobile app for the event on Politechnika Poznanska in Poznan.</span>
        <ul>
          <li>Rewriting the mobile app from Ionic to React Native</li>
          <li>Using Redux, Typescript.</li>
          <li>Publishing to Google Play and Apple App Store.</li>
          <li>Simple tests using Jest and Enzyme.</li>
        </ul>

        <h3>Noc Naukowców 2016-2018 / Ionic Developer & Graphic Designer</h3>
        <span>05.2016 - 09.2018</span><br />
        <span>Mobile app for the event on Politechnika Poznanska in Poznan.</span>
        <ul>
          <li>Implementing the frontend layer of the mobile app using Ionic.</li>
          <li>Designing UI for the whole app for every edition of the event.</li>
        </ul>

        <span>If you are interested in my whole experience, please download CV.pdf.</span>
      </div>
    </Section>
  );
});

export default Experience;
