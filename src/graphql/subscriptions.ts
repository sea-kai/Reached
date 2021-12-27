/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateEventPost = /* GraphQL */ `
  subscription OnCreateEventPost {
    onCreateEventPost {
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
export const onUpdateEventPost = /* GraphQL */ `
  subscription OnUpdateEventPost {
    onUpdateEventPost {
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
export const onDeleteEventPost = /* GraphQL */ `
  subscription OnDeleteEventPost {
    onDeleteEventPost {
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
