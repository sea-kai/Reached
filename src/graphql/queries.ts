/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      owner
      image
      status
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        image
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postId
      content
      owner
      post {
        id
        content
        owner
        image
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        content
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      owner
      title
      Description
      Date
      Time_start
      Time_end
      member {
        nextToken
      }
      post {
        nextToken
      }
      theme
      Municipal
      createdAt
      status
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        title
        Description
        Date
        Time_start
        Time_end
        theme
        Municipal
        createdAt
        status
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      eventId
      userName
      event {
        id
        owner
        title
        Description
        Date
        Time_start
        Time_end
        theme
        Municipal
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventPost = /* GraphQL */ `
  query GetEventPost($id: ID!) {
    getEventPost(id: $id) {
      id
      eventId
      username
      content
      event {
        id
        owner
        title
        Description
        Date
        Time_start
        Time_end
        theme
        Municipal
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventPosts = /* GraphQL */ `
  query ListEventPosts(
    $filter: ModelEventPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        username
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPostsSortedByCreatedAt = /* GraphQL */ `
  query ListPostsSortedByCreatedAt(
    $status: PostStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        owner
        image
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEventsSortedByCreatedAt = /* GraphQL */ `
  query ListEventsSortedByCreatedAt(
    $status: PostStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsSortedByCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        title
        Description
        Date
        Time_start
        Time_end
        theme
        Municipal
        createdAt
        status
        updatedAt
      }
      nextToken
    }
  }
`;
