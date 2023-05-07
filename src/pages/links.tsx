import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import logo from "../images/logo-small.png";
import { graphql, useStaticQuery } from "gatsby"; //Osqledaren_logga_svart.png
const Links: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query Links {
      allSanityLink {
        edges {
          node {
            ...Link
          }
        }
      }
    }
  `);

  const links = data.allSanityLink.edges
    .map((e) => e.node)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <Layout>
      <Header>
        <Logo src={logo}></Logo>
      </Header>
      <LinkListContainer>
        <LinkList>
          {links.map((link, i) => (
            <Link
              href={link.url}
              key={"link-" + i}
              style={{
                backgroundColor: link.color.hex,
                color: link.textColor.hex,
              }}
            >
              {link.name}
            </Link>
          ))}
        </LinkList>
      </LinkListContainer>
      <Footer></Footer>
    </Layout>
  );
};

export default Links;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-family: Avenir, sans-serif;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 128px;
`;

const LinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;

const LinkList = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  width: calc(100% - 40px);
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgb(220, 112, 45);
  color: inherit;
  text-decoration: inherit;
  height: 59px;
  font-weight: bold;
  border-radius: 50px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 128px;
  background-color: black;
  box-sizing: border-box;
`;
