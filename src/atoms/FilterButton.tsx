import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import { navigate } from "gatsby";

interface Props {
  name: string;
  background: string;
  to: string;
}

interface FilterButtProps {
  background: string;
}

const FilterButton: FunctionComponent<Props> = ({ name, background, to }) => (
  <FilterButt
    background={background}
    onClick={() => {
      navigate(to);
    }}
  >
    {name}
  </FilterButt>
);

const FilterButt = styled.div<FilterButtProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35vw;
  width: 72vw;
  cursor: pointer;
  color: black;
  line-height: 12px;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  font-size: 1.3vw;
  height: 2vw;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 0.5vw solid;
    border-bottom-color: ${props => {
      return props.background;
    }};
    transition: border-bottom-width 0.2s ease;
  }

  &:hover:after {
    border-bottom-width: 0.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    display: none;
  }
`;

export default FilterButton;
