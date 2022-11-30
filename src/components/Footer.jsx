import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgPhone } from "react-icons/cg";
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  const Wrapper = styled.section`
    footer {
      padding: 14rem 0 9rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-social--icons {
        display: flex;
        gap: 2rem;
        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};
          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
      .navbar-link{
        text-transform: uppercase;
        color:#fff ;
        /* gap : 2rem; */
        padding: 2rem 0.4rem ;
        font-size:20px ;

      }
      .footer-bottom--section {
        padding-top: 9rem;
        hr {
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      footer .footer-bottom--section {
        padding-top: 3.2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <img src="" className="" />
            <h3>Payment Planet</h3>
            <p>
              Our Debit Card Program Makes It Easy To Get The Most Out Of Your
              Everyday Spending.
            </p>
          </div>
          <div className="footer-services">
            <h3>Services</h3>
            <ul className="footer-navlink">
              <li>
                <NavLink to="/" className="navbar-link">
                  Plant
                </NavLink>
              </li>
              <br /> <br />
              <li>
                <NavLink to="/payment" className="navbar-link">
                  Payment
                </NavLink>
              </li>
              <br /> <br />
              <li>
                <NavLink to="/prepaid" className="navbar-link">
                  Prepaid
                </NavLink>
              </li>
              <br /> <br />
              <li>
                <NavLink to="/card" className="navbar-link">
                  Card
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="">
            <h3>Contact Us</h3>
            <div className="footer-social--icons">
              <CgPhone className="icons" />
              <AiOutlineMail className="icons" />

            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-appstore">
            <picture>
              <img src="images/playstore.jpg" />
            </picture>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Ravindra Kurhade. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
