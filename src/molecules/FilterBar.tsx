import React, { FunctionComponent, useState } from 'react';
import logo from '../images/logo-small.png'; //Osqledaren_logga_svart.png
import FilterButton from '../atoms/FilterButton';
import styled from '../styles/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Category } from '../utils/types';
import theme from '../styles/theme';

const Filterbar: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BarDesktop>
      <a href="https://osqledaren.se/">
        <HeaderImage src={logo} />
      </a>

      <FilterButton
        to="/samhalle"
        name="Samhälle"
        background={theme.colors.branch}
      ></FilterButton>
      <FilterButton
        to="/kultur"
        name="Kultur"
        background={theme.colors.english}
      ></FilterButton>
      <FilterButton
        to="/ol-graever"
        name="OL Gräver"
        background={theme.colors.olGraver}
      ></FilterButton>
      <FilterButton
        to="/underhallning"
        name="Underhållning"
        background={theme.colors.underhallning}
      ></FilterButton>
      <FilterButton
        to="/pa-campus"
        name="På Campus"
        background={theme.colors.aktuellt}
      ></FilterButton>

      <Hamburger
        tabIndex={0}
        className={isActive ? 'open' : ''}
        onBlur={e => {
          if (
            (e.nativeEvent.target as any).contains(e.nativeEvent.relatedTarget)
          ) {
            return;
          }
          setIsActive(false);
        }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <HamburgerMenu>
          <a
            className={'smol'}
            style={{ borderColor: theme.colors.branch }}
            tabIndex={0}
            href="/samhalle"
          >
            Samhälle
          </a>
          <a
            className={'smol'}
            style={{ borderColor: theme.colors.english }}
            tabIndex={0}
            href="/kultur"
          >
            Kultur
          </a>
          <a
            className={'smol'}
            style={{ borderColor: theme.colors.olGraver }}
            tabIndex={0}
            href="/ol-graever"
          >
            OL Gräver
          </a>
          <a
            className={'smol'}
            style={{ borderColor: theme.colors.underhallning }}
            tabIndex={0}
            href="/underhallning"
          >
            Underhållning
          </a>
          <a
            className={'smol'}
            style={{ borderColor: theme.colors.aktuellt }}
            tabIndex={0}
            href="/pa-campus"
          >
            På Campus
          </a>
          <a tabIndex={0} href="https://www.instagram.com/osqledaren/">
            Instagram
          </a>
          <a tabIndex={0} href="https://www.facebook.com/osqledaren">
            Facebook
          </a>
          <a tabIndex={0} href="https://issuu.com/osqledaren">
            Issuu
          </a>
          <a tabIndex={0} href="/about">
            About
          </a>
        </HamburgerMenu>
      </Hamburger>
    </BarDesktop>
  );
};
const HeaderImage = styled.img`
  width: 4vw; //35

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 12vw;
  }
`;

const BarDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1%;
  padding-left: 10vw;
  padding-right: 10vw;
  box-sizing: border-box;
  height: 5vw;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f4f4f4;
  box-shadow: 0px 2.5px 4px rgba(0, 0, 0, 0.02),
    0px 20px 32px rgba(0, 0, 0, 0.04);

  > a {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    margin-bottom: 2rem;
    height: 15vw;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`;

const Hamburger = styled.div`
    width: 2vw;
    height: 2vw;
    display: block;
    border: none;
    position: relative;
    margin: 20px;
    flex-shrink: 0;
    cursor: pointer;
    background: linear-gradient(
      to bottom, 
      black, black 20%, 
      white 20%, white 40%, 
      black 40%, black 60%, 
      white 60%, white 80%, 
      black 80%, black 100%
    );

    &:not(.open) div  {
      display: none;
 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
      height:5vw;
      width: 5vw;
    }
}
`;

const HamburgerMenu = styled.div`
display:flex;  
flex-direction: column;
  align-items: right;
  justify-content: right;
  position: fixed;
  top: 5vw;
  right: 12vw;
  background-color: #f4f4f4;
  color: black;
  width: 15vw;
  cursor: pointer;
  
  font-family: Avenir, Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  font-size: 1.5vw;
  
  text-align: right;
  box-sizing: border-box;

  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  > a {
    text-decoration: none;
    &:link, &:visited {
      color: black;
    }
    border-left: 3vw solid transparent;
    width: 100%;
    box-sizing: border-box;
    height: 5vw;
    display:flex;
      justify-content: flex-end;
      align-items: center;
    
  }

  > a.smol {
    display: none;
  }

  @media only screen and (max-width:  ${({ theme }) =>
    theme.breakpoints.sm + 'px'}) {
    > a.smol {
      display: flex;
    }
    > a {
      height: 10vw;
      font-size: 3vw;
      justify-content: center;
    }
    align-items: center;

    width: 100%;
    top: 15vw;
    right: 0vw;
    padding: 0px;
    text-align:center;
  }
}
`;

export default Filterbar;
