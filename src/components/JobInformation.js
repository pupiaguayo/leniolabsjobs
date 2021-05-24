import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  ul li,
  a {
    margin-top: 1.5vh;
    color: #eebe5b;
  }
`;
// styles container Cards

const JobsInfo = () => {
  const { jobId } = useParams();
  const [description, setDescription] = useState({});
  const PROXY_PATH = "https://cors-anywhere.herokuapp.com/";
  const BASE_PATH = `https://jobs.github.com/positions/${jobId}.json`;
  const onlyJob = async () => {
    const dataJob = await fetch(`${PROXY_PATH}${BASE_PATH}`);
    const oneJobData = await dataJob.json();
    console.log(oneJobData);
    setDescription(oneJobData);
  };
  const informationJob = () => {
    return {
      __html: description.description,
    };
  };
  // API CALL / SET REDUX
  useEffect(() => {
    onlyJob();
  }, []);

  return (
    <TextJob>
      <h2>{description.title}</h2>
      <p className="timeLocation">
        <span>
          <BiWorld></BiWorld>
        </span>
        {description.location}
      </p>
      <p className="timeLocation">
        {" "}
        <span>
          <FiClock></FiClock>
        </span>
        {description.created_at}
      </p>
      <article>
        {/*Job Description */}
        <h3>Description</h3>
        <div dangerouslySetInnerHTML={informationJob()} className="infoJob" />

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
