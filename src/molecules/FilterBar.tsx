import React, { FunctionComponent } from 'react';
import FilterButton from '../atoms/FilterButton';
import styled from '../styles/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Category } from '../utils/types';
import theme from '../styles/theme';

const Filterbar: FunctionComponent = () => {
  /*const {
    allSanityCategory,
  }: {
    allSanityCategory: { edges: Array<{ node: Category }> };
  } = useStaticQuery(graphql`
    query {
      allSanityCategory {
        edges {
          node {
            ...Category
          }
        }
      }
    }
  `);*/
  return (
    <Bar>
      {/* {allSanityCategory.edges
        .filter(({ node }) => node.menu)
        .sort((a, b) => a.node.order - b.node.order)
        .map(({ node }) => (
          <FilterButton
            to={node.slug.current}
            key={node.slug.current}
            name={node.title}
            background={node.color.hex}
          ></FilterButton>
        ))} */}

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
      <FilterButton
        to="/podcasts"
        name="Podcasts"
        background={theme.colors.podcast}
      ></FilterButton>
      <FilterButton
        to="/insandare"
        name="Insändare"
        background={theme.colors.subscribe}
      ></FilterButton>
    </Bar>
  );
};
const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60vw;
  padding-bottom: 2%;
  max-height: 2vw;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 85vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export default Filterbar;
