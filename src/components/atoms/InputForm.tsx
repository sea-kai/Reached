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

export const InputForm: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleCreatePost = async (content: string) => {
    const data: CreatePostInput = {
      content: content,
      owner: "kaito",
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
    <div>
    <input style={{
      border: 'solid 1px #ddd',
      padding: 10,
      borderRadius: 4,
      fontSize: 18,
      WebkitAppearance: 'none',
      color: '#333'
    }} value={content} type="text" placeholder="please write todo" onChange={e => setContent(e.target.value)} />
    <button style={{
      padding: 10,
      background: '#F06292',
      color: '#eee',
      borderRadius: 4,
      fontSize: 18,
      WebkitAppearance: 'none'
    }} onClick={() => handleCreatePost(content)}>add Question</button>
    </div>
  )
}

