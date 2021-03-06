import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ work: { name, description, image,github,demo } }) => {
  const des = useRef(null);
  const img = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = des.current;
    gsap.fromTo(
      el,
      { x: -100 },
      {
        x: 50,
        duration: 3,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      }
    );
      // return () => {};
  }, []);

  useEffect(() => {
    const el = img.current;
    gsap.fromTo(
      el,
      { x: 100 },
      {
        x: -50,
        duration: 3,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      }
    );
      // return () => {};
  }, []);

  return (
    <Container>
      <ProjectTitle>
        <h3>{name}</h3>
      </ProjectTitle>

      <Details>
        {" "}
        <Description ref={des}>
          {description}

          <Links>
            <a>
              <FontAwesomeIcon icon={faEye} />
              <span>
                <a className='demo' href={demo}>Live</a></span>
            </a>
            <a>
              <FontAwesomeIcon icon={faCodeBranch} />
              <span>
                <a  className='visit-git' href={github}>
                Code
                </a>
                </span>
            </a>
          </Links>
        </Description>
        <Image ref={img}>
          <img src={image} alt="image" />
        </Image>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 5rem auto;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 4rem;

  @media (max-width: 800px) {
  }
`;

const ProjectTitle = styled.div`
  color: #64ef69;
  // border: 1px solid red;
  font-size: 25px;
  line-height: 30px;
  font-weight: 400;
  font-family: "Ubuntu Mono", monospace;

  @media (max-width: 800px) {
    font-size: 18px;
    border: 1px solid b;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }
`;

const Description = styled.div`
  // color: #777778;
  color: #ffffff;
  width: 30%;
  // border:1px solid red;
  height: 30vh;
  font-family: "Open Sans", sans-serif;
  font-weight:600;

  @media (max-width: 800px) {
    min-width: 300px;
    height: 110px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    //  border:1px solid yellow;
  }
`;

const Links = styled.div`
  margin-top: 6px;
  width: 150px;
  display: flex;

  a {
    padding: 7px;
    font-size:14px;

    &:hover{
      cursor:pointer;
    }
  }
`;

const Image = styled.div`
  width: 55%;
  // border: 1px solid #ffffff;
  height: 90vh;
  box-shadow: 3px 1px 1px 1px #ccc;

  @media (max-width: 800px) {
    height: 0vh;
  }
  box-shadow: 3px 3px 6px 5px #ccc;

  img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 800px) {
    width: 98%;
    height: 35vh;
  }
`;

export default ProjectCard;
