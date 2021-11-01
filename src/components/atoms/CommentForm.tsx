import React, { useState } from "react"

import API, { graphqlOperation } from "@aws-amplify/api"
import { createComment } from "../../graphql/mutations"
import { CreateCommentInput } from "src/types/API";

type CommentFormProps = {
  postId: string | undefined
}

export const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {

  const [content, setContent] = useState<string>("")

  const handleCreateComment = async (content: string) => {

    if (!content) return

    const data: CreateCommentInput = {
      postId: postId,
      content: content,
      owner: ""
    }

    try {
      await API.graphql(graphqlOperation(createComment, { input: data }))
      setContent("")
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <div>
        <textarea value={content}  placeholder='コメントを入力' onChange={e => setContent(e.target.value)}  className='text-lg text-gray-800 border-solid'/>
        <div className='bg-green-200'>
          <button  type="submit" onClick={() => handleCreateComment(content)}>
            Comment
          </button>
        </div>
    </div>
  )
}
