import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Layout from "../organisms/Layout";
import InfoWrapper from "../molecules/InfoWrapper";
import styled from "../styles/styled";
import H from "../atoms/H";
import P from "../atoms/P";

const Live: FunctionComponent = () => {
  return (
    <Layout>
      <InfoWrapper>
        <LiveContainer>
          <LiveText>
            <H variant="3">Live reporting from Kårfullmäktige KF-04</H>
            <li>
              Follow our live reporting below. You can find all documents for
              KF-04
              <a href="https://drive.google.com/drive/folders/1CSdqR8gKbDTGtGcLkS2iOpQQ12Mw6cyD">
                here.
              </a>
            </li>
            <br />
          </LiveText>
          <iframe
            name="lb24"
            frameborder="0"
            height="100%"
            loading="lazy"
            width="100%"
            class="lb24-iframe"
            scrolling="auto"
            src="//v.24liveblog.com/iframe/?id=3260367258858776128"
          ></iframe>
          <script src="https://v.24liveblog.com/iframe.js"></script>
        </LiveContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default Live;

const LiveText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const LiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + "px"}) {
    flex-direction: column;
  }
`;
