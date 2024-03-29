/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDoes = /* GraphQL */ `
  query GetDoes($id: ID!) {
    getDoes(id: $id) {
      id
      name
      description
      age
      height
      breed
      dob
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDoes = /* GraphQL */ `
  query ListDoes(
    $filter: ModelDoesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        age
        height
        breed
        dob
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
