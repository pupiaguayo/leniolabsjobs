import React from "react";
import styled from "styled-components";

import { BiWorld } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
// styles container Cards
export const TextJob = styled.div`
  color: white;
  height: auto;
  margin: 2vh 6.25vw 2vh 6.25vw;
  grid-column: 2/5;
  display: flex;
  flex-wrap: wrap;

  h2,
  h3 {
    font-size: 2.5em;
    width: 100%;
  }
  .timeLocation {
    padding-right: 1.875em;
    span {
      padding-right: 0.5625em;
      color: #eebe5b;
    }
  }
  @media (max-width: 575.98px) {
    grid-column: 1/5;
  }

  h3 {
    font-size: 2em;
    margin-top: 4vh;
  }

  p {
    font-size: 1.125em;
    line-height: 1.5em;
    margin-top: 1.5vh;
  }
  ul {
    margin-top: 2vh;
  }
  ul li {
    margin-top: 1.5vh;
    color: #eebe5b;
  }
`;
// styles container Cards

const JobsInfo = () => {
  return (
    <TextJob>
      <h2>Frontend Engineer</h2>
      <p className="timeLocation">
        <span>
          <BiWorld></BiWorld>
        </span>
        Los angeles
      </p>
      <p className="timeLocation">
        {" "}
        <span>
          <FiClock></FiClock>
        </span>
        5 days ago
      </p>
      <article>
        {/*Job Description */}
        <h3>Description</h3>
        <p>
          En Leniolabs colaboramos en el desarrollo de software de nuestros
          clientes que se encuentran principalmente en Estados Unidos. Nuestra
          experiencia se basa fuertemente en el desarrollo frontend con
          lenguajes como Javascript, React y Angular. También trabajamos algunos
          proyectos en backend con lenguajes como Ruby on Rails, Python
          (classifiers y big data structures) y NodeJS.
        </p>
        <p>
          Tenemos operaciones en Argentina, Chile, España y USA. Los equipos de
          desarrollo están mayormente ubicados en Argentina y Chile.
        </p>
        <p>
          Trabajamos con equipos distribuidos de manera remota y colaborativa,
          utilizando herramientas como Slack, Zoom, Google Meet, Jira, entre
          otras.
        </p>
        {/* Job Description*/}

        {/*Hiring Process */}
        <h3>Hiring Process</h3>
        <p>
          When someone wants to join Leniolabs for a Frontend Engineering
          position we adhere to the following processes:
        </p>
        <ul>
          <li>
            Selected candidates will be invited to complete a short written
            assessment.
          </li>
          <li>
            Next, candidates will be invited to schedule a 30-minute screening
            call with our Global Recruiters.
          </li>
          <li>
            Then, candidates will be invited to schedule a 90 minute technical
            interview with one of our Frontend Engineers. This interview has two
            main sections: overall javascript questions and react or framework
            specific questions.
          </li>
          <li>
            Additionally we may ask the candidate to perform a code test to
            validate the impression we got in the technical interview.
          </li>
          <li>Successful candidates will subsequently be made an offer.</li>
          <li>
            Additional details about our process can be found on our hiring
            page.
          </li>
        </ul>
        {/*Hiring Process */}
      </article>
    </TextJob>
  );
};
export default JobsInfo;
