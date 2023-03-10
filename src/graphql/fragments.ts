import { graphql } from "gatsby";

export const articleFragment = graphql`
  fragment Article on SanityArticle {
    title
    id
    creators {
      creator {
        name
        id
        mail
        profilePicture {
          asset {
            fluid(maxWidth: 960) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      role {
        name
      }
    }
    mainImage {
      asset {
        fluid(maxWidth: 960) {
          ...GatsbySanityImageFluid
        }
      }
    }
    publishDate
    ingress
    category {
      ...Category
    }
    slug {
      current
    }
    _rawContent
  }
`;

export const categoryFragment = graphql`
  fragment Category on SanityCategory {
    title
    description
    slug {
      current
    }
    color {
      hex
    }
    menu
    order
  }
`;

export const creatorFragment = graphql`
  fragment Creator on SanityCreator {
    name
    mail
    profilePicture {
      asset {
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

// export const episodeFragment = graphql`
//   fragment Episode on PodcastEpisode {
//     title
//     id
//   }
// `;
