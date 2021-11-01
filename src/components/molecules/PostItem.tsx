import React, { useState, useEffect } from "react"
import API, { graphqlOperation } from "@aws-amplify/api"
import { deletePost } from "../../graphql/mutations"
import {
  Post,
  Comment,
  OnCreateCommentSubscriptionData,
  OnDeleteCommentSubscriptionData
} from "src/types/API"

import { onCreateComment, onDeleteComment } from "../../graphql/subscriptions"
import { CommentForm } from 'src/components/atoms/CommentForm';

type PostItemProps = {
  post: Post
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {

  const [comments, setComments] = useState<(Comment | null)[] | null | undefined>([])

  const handleDeletePost = async (id: string | undefined) => {
    if (!id) return

    try {
      await API.graphql(graphqlOperation(deletePost, { input: { id: id } }))
    } catch (err: any) {
      console.log(err)
    }
  }

  const getComments = () => {
    setComments(post.comments?.items)
  }

  const subscribeCreatedComment = () => {
    const client = API.graphql(graphqlOperation(onCreateComment))

    if ("subscribe" in client) {
      client.subscribe({
        next: ({ value: { data } }: OnCreateCommentSubscriptionData) => {
          if (data.onCreateComment) {
            const createdComment: Comment = data.onCreateComment
            setComments((prev) => prev?.length? [createdComment, ...prev] : [createdComment, ...[]])
          }
        }
      })
    }
  }

  const subscribeDeletedComment = () => {
    const client = API.graphql(graphqlOperation(onDeleteComment))

    if ("subscribe" in client) {
      client.subscribe({
        next: ({ value: { data } }: OnDeleteCommentSubscriptionData) => {
          if (data.onDeleteComment) {
            const deletedComment: Comment = data.onDeleteComment
            setComments((prev) => prev?.filter((comment) => comment?.id !== deletedComment.id))
          }
        }
      })
    }
  }

  useEffect(() => {
    getComments()
    subscribeCreatedComment()
    subscribeDeletedComment()
  }, [])

  return (
    <div className='text-xl bg-white rounded-md border-4 border-solid'>
      {post.content}
      <CommentForm postId={post?.id}/>
      <div>
        {comments?.map((comment) => {
          return (
            <div key={comment.id}>
              <div>
                {comment.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
