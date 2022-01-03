const { gql } = require("apollo-server");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    artist: String!
    genre: String!
    duration: String!
  }

  type Query {
    tracks: [Track!]!
    track(id: ID!): Track!
  }
`;

module.exports = { typeDefs };
