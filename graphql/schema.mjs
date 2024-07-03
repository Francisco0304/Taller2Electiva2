// graphql/schema.mjs
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    book: Book
  }

  type Book {
    id: ID!
    year: Int!
    name: String!
    pages: Int!
    author: String!
    status: Boolean!  # Cambiado a Boolean
    users: [User]
  }

  type Query {
    users: [User]
    user(id: ID!): User
    books: [Book]
    book(id: ID!): Book
    findBookByName(name: String!): Book
  }

  type Mutation {
    createUser(name: String!, email: String!, bookId: ID!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
    createBook(year: Int!, name: String!, pages: Int!, author: String!, status: Boolean!): Book  # Ajustado a Boolean
    updateBook(id: ID!, year: Int, name: String, pages: Int, author: String, status: Boolean): Book  # Ajustado a Boolean
    deleteBook(id: ID!): Book
  }
`;

export default typeDefs;
