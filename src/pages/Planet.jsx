
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Planet = () => {

  const Wrapper = styled.section`
    padding: 9rem 0;
    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .btn {
      max-width: 16rem;
    }
    .hero-top-data {
      text-transform: none;
      font-weight: 500;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.red};
    }
    .hero-heading {
      text-transform: none;
      font-size: 4rem;
      text-align:left ;
    }
    /* .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    } */
    .section-hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    picture {
      text-align: center;
    }
    .hero-img {
      max-width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 7.2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Payment Planet Prepaid Card</p>
          <h2 className="hero-heading">
            The Card that takes You to Different Places
          </h2>
          <picture>
            <img src="images/playstore.jpg" alt="" className="" />
          </picture>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="images/hero.jpg" alt="" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default Planet;