import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import Img from 'gatsby-image';
import Layout from '../organisms/Layout';
import InfoWrapper from '../molecules/InfoWrapper';

import Agnes from '../images/polaroids/Agnes.png';
import Alcina from '../images/polaroids/Alcina2.png';
import Alexandra from '../images/polaroids/Alexandra4.png';
import Anastasia from '../images/polaroids/Anastasia.png';
import Anirudh from '../images/polaroids/Anirudh.png';
import Anna from '../images/polaroids/Anna.png';
import Ayan from '../images/polaroids/Ayan.png';
import Benjamin from '../images/polaroids/Benjamin.png';
import Celeste from '../images/polaroids/Celeste.png';
import Chen from '../images/polaroids/Chen.png';
import Diana from '../images/polaroids/Diana 2.png';
import Irakli from '../images/polaroids/Irakli.png';
import Lina from '../images/polaroids/Lina.png';
import Ludvig from '../images/polaroids/Ludvig.png';
import Luna from '../images/polaroids/Luna.png';
import Maite from '../images/polaroids/Maite.png';
import Markus from '../images/polaroids/Markus.png';
import Meline from '../images/polaroids/Meline.png';
import My from '../images/polaroids/My.png';
import Nour from '../images/polaroids/Nour 2.png';
import Office from '../images/polaroids/Office.png';
import Oscar from '../images/polaroids/Oscar.png';
import Parisa from '../images/polaroids/Parisa.png';
import Roisin from '../images/polaroids/Roisin.png';
import Sandra from '../images/polaroids/Sandra 2.png';
import Sara from '../images/polaroids/Sara.png';
import Su from '../images/polaroids/Su.png';
import Veronika from '../images/polaroids/Veronika.png';

const About: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      staff: file(relativePath: { eq: "staff.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <InfoWrapper>
        <AboutContainer>
          <AboutText>
            <H variant="3">Om Osqledaren</H>
            <P>
              Osqledaren är Tekniska Högskolans Studentkårs tidning som når ut
              till alla KTHs kårmedlemmar i cirka 10 000 exemplar, fyra gånger
              per läsår. Tidningen har till uppgift att bevaka kåren och KTH,
              men skriver också om andra ämnen som kan vara intressanta för
              teknologstudenter; som till exempel nöje, teknik, karriär och
              utbildning.
            </P>
            <P>
              Vill ni annonsera i Osqledaren?{' '}
              <Link to="/advertise">Klicka här!</Link>
            </P>
          </AboutText>

          <Contact>
            <H variant="3">Kontaktuppgifter</H>
            <ContactList>
              <P>
                <li>Chefredaktör: Benjamin Javitz</li>
                <br />
                <li>Ansvarig utgivare:</li>
                <li>Benjamin Javitz</li>
                <li>
                  <a href="tel:087909888">08 79 09 888</a>
                </li>
                <li>
                  <a href="mailto:osqledaren@ths.kth.se">
                    osqledaren@ths.kth.se
                  </a>
                </li>
                <br />
                <li>Kårhuset Nymble, Drottning Kristinas väg 19 </li>
                <li>Osqledaren, THS, 100 44 Stockholm</li>
              </P>
            </ContactList>
          </Contact>
          {/* <ImageWrapper>
            <Img fluid={data.staff.childImageSharp.fluid} />
          </ImageWrapper> */}
          <MembersWrapper>
            <img src={Agnes}></img>
            <img src={Alcina}></img>
            <img src={Alexandra}></img>
            <img src={Anastasia}></img>
            <img src={Anirudh}></img>
            <img src={Anna}></img>
            <img src={Ayan}></img>
            <img src={Benjamin}></img>
            <img src={Celeste}></img>
            <img src={Chen}></img>
            <img src={Diana}></img>
            <img src={Irakli}></img>
            <img src={Lina}></img>
            <img src={Ludvig}></img>
            <img src={Luna}></img>
            <img src={Maite}></img>
            <img src={Markus}></img>
            <img src={Meline}></img>
            <img src={My}></img>
            <img src={Nour}></img>
            <img src={Office}></img>
            <img src={Oscar}></img>
            <img src={Parisa}></img>
            <img src={Roisin}></img>
            <img src={Sandra}></img>
            <img src={Sara}></img>
            <img src={Su}></img>
            <img src={Veronika}></img>
          </MembersWrapper>
        </AboutContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default About;

const MembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  > img {
    width: 100px;
    margin-top: 20px;
    margin-right: 10px;
  }
`;

const Contact = styled.div`
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 1000 + 'px'}) {
    order: 3;
  }
`;

const ContactList = styled.ol`
  list-style: none;
  padding: 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const AboutText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + 'px'}) {
    flex-direction: column;
  }
`;
