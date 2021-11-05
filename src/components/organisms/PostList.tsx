import Amplify from '@aws-amplify/core';
import PubSub from '@aws-amplify/pubsub';
import { API} from 'aws-amplify';
import { useEffect, useState } from 'react';
import awsmobile from 'src/aws-exports';
import { listPostsSortedByCreatedAt } from 'src/graphql/queries';
import { Post, ListPostsSortedByCreatedAtQuery,} from 'src/types/API';
import { PostItem } from "src/components/molecules/PostItem";

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);

export const PostList:React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextToken, setNextToken] = useState<string | null | undefined>(null);

  const getPosts = async () => {
    const result = await API.graphql({
      query: listPostsSortedByCreatedAt,
      variables: {
        status: "published",
        sortDirection: "DESC",
        limit: 5,
        nextToken: nextToken
      }
    })

    if ("data" in result && result.data) {
      const data = result.data as ListPostsSortedByCreatedAtQuery
      if (data.listPostsSortedByCreatedAt) {
        setPosts(data.listPostsSortedByCreatedAt.items as Post[])
        setNextToken(data.listPostsSortedByCreatedAt.nextToken)
      }
    }
  }

  const loadMore = async () => {
    setLoading(true)

    const result = await API.graphql({
      query: listPostsSortedByCreatedAt,
      variables: {
        status: "published",
        sortDirection: "DESC",
        limit: 5,
        nextToken: nextToken
      }
    })

    if ("data" in result && result.data) {
      const data = result.data as ListPostsSortedByCreatedAtQuery
      if (data.listPostsSortedByCreatedAt) {
        const items = data.listPostsSortedByCreatedAt.items as Post[]
        setPosts((prev) => [...prev, ...items])
        setNextToken(data.listPostsSortedByCreatedAt.nextToken)
      }
    }

    setLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div  className='w-3/4'>
      {posts?.map((post: Post) => {
        return (
          <PostItem key={post.id} post={post} />
        )
      })
    }
    </div>
  )
}
