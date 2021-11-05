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
    <div className='flex mt-2'>
        <textarea className='w-full text-lg text-gray-800 rounded-tr-2xl rounded-bl-2xl border-2' value={content}  placeholder='回答を入力してください' onChange={e => setContent(e.target.value)}  />
        <button className='self-end btn-blue' type="submit" onClick={() => handleCreateComment(content)}>
          回答
        </button>
    </div>
  )
}
