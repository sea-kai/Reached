/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Post = {
  __typename: "Post",
  id?: string,
  content?: string,
  owner?: string,
  image?: string | null,
  status?: PostStatus,
  comments?: ModelCommentConnection | null,
  createdAt?: string | null,
  updatedAt?: string,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  postId?: string,
  content?: string,
  owner?: string,
  post?: Post | null,
  createdAt?: string,
  updatedAt?: string,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  owner: string | undefined,
  image?: string | null,
  status: PostStatus,
  createdAt?: string | null,
};

export enum PostStatus {
  published = "published",
  unpublished = "unpublished",
}


export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPostStatusInput = {
  eq?: PostStatus | null,
  ne?: PostStatus | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};


export type UpdatePostInput = {
  id: string,
  content?: string | null,
  owner?: string | null,
  image?: string | null,
  status?: PostStatus | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postId: string | undefined,
  content: string,
  owner: string | undefined,
};

export type ModelCommentConditionInput = {
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postId?: string | null,
  content?: string | null,
  owner?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  owner: string,
  title: string,
  Description?: string | null,
  Date: string,
  Time_start?: string | null,
  Time_end?: string | null,
  theme: string,
  Municipal?: string | null,
  createdAt?: string | null,
  status?: PostStatus | null,
};

export type ModelEventConditionInput = {
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  Description?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  Time_start?: ModelStringInput | null,
  Time_end?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  Municipal?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  owner: string,
  title: string,
  Description?: string | null,
  Date: string,
  Time_start?: string | null,
  Time_end?: string | null,
  member?: ModelMemberConnection | null,
  post?: ModelEventPostConnection | null,
  theme: string,
  Municipal?: string | null,
  createdAt?: string | null,
  status?: PostStatus | null,
  updatedAt: string,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items?:  Array<Member | null > | null,
  nextToken?: string | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  eventId: string,
  userName: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventPostConnection = {
  __typename: "ModelEventPostConnection",
  items?:  Array<EventPost | null > | null,
  nextToken?: string | null,
};

export type EventPost = {
  __typename: "EventPost",
  id: string,
  eventId: string,
  username?: string | null,
  content: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  owner?: string | null,
  title?: string | null,
  Description?: string | null,
  Date?: string | null,
  Time_start?: string | null,
  Time_end?: string | null,
  theme?: string | null,
  Municipal?: string | null,
  createdAt?: string | null,
  status?: PostStatus | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateMemberInput = {
  id?: string | null,
  eventId: string,
  userName: string,
};

export type ModelMemberConditionInput = {
  eventId?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type UpdateMemberInput = {
  id: string,
  eventId?: string | null,
  userName?: string | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type CreateEventPostInput = {
  id?: string | null,
  eventId: string,
  username?: string | null,
  content: string,
};

export type ModelEventPostConditionInput = {
  eventId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelEventPostConditionInput | null > | null,
  or?: Array< ModelEventPostConditionInput | null > | null,
  not?: ModelEventPostConditionInput | null,
};

export type UpdateEventPostInput = {
  id: string,
  eventId?: string | null,
  username?: string | null,
  content?: string | null,
};

export type DeleteEventPostInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  Description?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  Time_start?: ModelStringInput | null,
  Time_end?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  Municipal?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelEventPostFilterInput = {
  id?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelEventPostFilterInput | null > | null,
  or?: Array< ModelEventPostFilterInput | null > | null,
  not?: ModelEventPostFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventPostMutationVariables = {
  input: CreateEventPostInput,
  condition?: ModelEventPostConditionInput | null,
};

export type CreateEventPostMutation = {
  createEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventPostMutationVariables = {
  input: UpdateEventPostInput,
  condition?: ModelEventPostConditionInput | null,
};

export type UpdateEventPostMutation = {
  updateEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventPostMutationVariables = {
  input: DeleteEventPostInput,
  condition?: ModelEventPostConditionInput | null,
};

export type DeleteEventPostMutation = {
  deleteEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      content: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items?:  Array< {
      __typename: "Member",
      id: string,
      eventId: string,
      userName: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventPostQueryVariables = {
  id: string,
};

export type GetEventPostQuery = {
  getEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventPostsQueryVariables = {
  filter?: ModelEventPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventPostsQuery = {
  listEventPosts?:  {
    __typename: "ModelEventPostConnection",
    items?:  Array< {
      __typename: "EventPost",
      id: string,
      eventId: string,
      username?: string | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByCreatedAtQueryVariables = {
  status?: PostStatus | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByCreatedAtQuery = {
  listPostsSortedByCreatedAt?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListEventsSortedByCreatedAtQueryVariables = {
  status?: PostStatus | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsSortedByCreatedAtQuery = {
  listEventsSortedByCreatedAt?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    owner: string,
    image?: string | null,
    status: PostStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      owner: string,
      image?: string | null,
      status: PostStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    owner: string,
    title: string,
    Description?: string | null,
    Date: string,
    Time_start?: string | null,
    Time_end?: string | null,
    member?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    post?:  {
      __typename: "ModelEventPostConnection",
      nextToken?: string | null,
    } | null,
    theme: string,
    Municipal?: string | null,
    createdAt?: string | null,
    status?: PostStatus | null,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    eventId: string,
    userName: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventPostSubscription = {
  onCreateEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventPostSubscription = {
  onUpdateEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventPostSubscription = {
  onDeleteEventPost?:  {
    __typename: "EventPost",
    id: string,
    eventId: string,
    username?: string | null,
    content: string,
    event?:  {
      __typename: "Event",
      id: string,
      owner: string,
      title: string,
      Description?: string | null,
      Date: string,
      Time_start?: string | null,
      Time_end?: string | null,
      theme: string,
      Municipal?: string | null,
      createdAt?: string | null,
      status?: PostStatus | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export interface User {
  id: string,
  username: string,
  attributes: {
    email: string
    sub: string
  }
}

export type OnCreatePostSubscriptionData = {
  value: {
    data: OnCreatePostSubscription
  }
}

export type OnDeletePostSubscriptionData = {
  value: {
    data: OnDeletePostSubscription
  }
}

export type OnCreateCommentSubscriptionData = {
  value: {
    data: OnCreateCommentSubscription
  }
}

export type OnDeleteCommentSubscriptionData = {
  value: {
    data: OnDeleteCommentSubscription
  }
}
