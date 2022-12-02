import React, { FunctionComponent } from 'react';
import ad from '../images/Ad-Logo-Test.png'; //Osqledaren_logga_svart.png
import logo from '../images/Osqledaren_logga_svart.png'; //Osqledaren_logga_svart.png
import styled from '../styles/styled';
import { Link } from 'gatsby';

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <a href="https://osqledaren.se/advertise/"><AdImage src={ad} /></a>
      <a href="https://osqledaren.se/"><HeaderImage src={logo} /></a>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 0;

  /* VW Heights below set fix a flickering issue in Safari by making HeaderWrappers height static. 
  Calculated like this: height = % width of HeaderImage / 3.3 (The ratio of the sides of the logo)*/
  height: 30vw; //10.6
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    height: 40vw; //15.15vw
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    height: 52vw; //25.75vw;
  }
`;

const HeaderImage = styled.img`
  width: 40vw; //35
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 50vw;//50
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 85vw; //85
  }
`;

const AdImage = styled.img`
  width: 60vw; //35
  padding-bottom: 2vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 85vw; //50
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 95vw; //85
  }
`;

export default Header;
