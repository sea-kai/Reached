import Amplify from '@aws-amplify/core';
import PubSub from '@aws-amplify/pubsub';
import { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import awsmobile from 'src/aws-exports';
import { createPost } from 'src/graphql/mutations';
import { CreatePostInput, PostStatus } from 'src/types/API';

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);

interface Props {
  userName: string;
}

export const InputForm: React.VFC<Props> = ({ userName }) => {
  const [content, setContent] = useState<string>("");

  const handleCreatePost = async (content: string) => {
    const data: CreatePostInput = {
      content: content,
      owner: userName,
      status: PostStatus.published
    }

    try {
      await API.graphql(graphqlOperation(createPost, { input: data }))
      setContent("")
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <div className="flex flex-col m-2 w-8/12 text-lg appearance-none">
      <textarea className='p-3 m-2 text-gray-700 rounded-xl border border-gray-400 border-solid' value={content} placeholder="質問を記入してください" onChange={e => setContent(e.target.value)} />
      <button className='self-end btn-blue' onClick={() => handleCreatePost(content)}>
        質問を投稿
      </button>
    </div>
  )
}

