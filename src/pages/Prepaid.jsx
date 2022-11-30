import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20rem;
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    height: 30rem;
    padding: 1.6rem;
    border-radius:1rem ;
   
  }
`;
const Prepaid = () => {
  return (
    <Wrapper className="section">
      <div className="card">
        <div className="container grid grid-two-column">
          <div>
            <h1 className="header">Coming Soon</h1>
            <h1 className="header">this 2022</h1>
            <p className="para">
              The best debit card rewards programs after a combination of
              flexibility and simplicity.look for a program that lets you redeem
              your rewards for cash back, gogt cards or merchandise and that
              doesn't require you to jump through hoops to earn or redeem your
              rewards.
            </p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSCOPUr9_r2g3rAuXgKy6k08atfanPlDePsz2edYoGT5efBivySgvenGeZ-XRGW_0Rlk&usqp=CAU"
              className="left-side"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Prepaid;
