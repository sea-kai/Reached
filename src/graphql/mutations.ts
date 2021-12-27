/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createEventPost = /* GraphQL */ `
  mutation CreateEventPost(
    $input: CreateEventPostInput!
    $condition: ModelEventPostConditionInput
  ) {
    createEventPost(input: $input, condition: $condition) {
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
export const updateEventPost = /* GraphQL */ `
  mutation UpdateEventPost(
    $input: UpdateEventPostInput!
    $condition: ModelEventPostConditionInput
  ) {
    updateEventPost(input: $input, condition: $condition) {
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
export const deleteEventPost = /* GraphQL */ `
  mutation DeleteEventPost(
    $input: DeleteEventPostInput!
    $condition: ModelEventPostConditionInput
  ) {
    deleteEventPost(input: $input, condition: $condition) {
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
