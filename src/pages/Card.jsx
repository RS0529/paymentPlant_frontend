import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgLock } from "react-icons/cg";

const Card = () => {
 

  return (
    <Wrapper className="section">
      <h4 className="common-heading">Go Place This Card</h4>
      <div className="container grid-row grid-four-row">
        <div className="card">
          <CgLock name="" className="card-icon" />
          <h4 className="card-heading">Locked in rates</h4>
          <div className="card-data">
            <p>A great Hii mkkkv kkkjg hhjjkk jkjkjggf </p>
          </div>
        </div>
        <div className="card">
          <CgLock name="" className="card-icon" />
          <h4 className="card-heading">Locked in rates</h4>
          <div className="card-data">
            <p>A great Hii mkkkv kkkjg hhjjkk jkjkjggf </p>
          </div>
        </div>
        <div className="card">
          <CgLock name="" className="card-icon" />
          <h4 className="card-heading">Locked in rates</h4>
          <div className="card-data">
            <p>A great Hii mkkkv kkkjg hhjjkk jkjkjggf </p>
          </div>
        </div>
        
      
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 2rem;
    height: 21rem;
    /* margin: 1rem 2rem ; */
    /* width: 41rem; */
    .card-data {
      padding: 0 2rem;
    }
    .card-heading {
      margin: 2rem 0;
      font-size: 1.4rem;
      margin-inline: 15rem;
      font-weight: 600;
    }
    .card-icon {
      margin: 10px;
      width: 39rem;
      height: 3rem;
    }
    /* .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    } */
  }
  /* figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  } */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Card;