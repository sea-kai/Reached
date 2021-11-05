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
    <div className='m-4 rounded-md'>
      <div className='p-2 h-32 text-4xl bg-white border-2 border-gray-300'>
        {post.content}
      </div>
      <div>
        {comments?.map((comment) => {
          return (
            <div className='pl-2 h-8 text-xl bg-gray-50 border-2' key={comment.id}>
              {comment.content}
            </div>
          )
        })}
      </div>
      <CommentForm postId={post?.id}/>
    </div>
  )
}
