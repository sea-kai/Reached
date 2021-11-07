import React, { VFC } from 'react';
import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { InputForm } from 'src/components/atoms/InputForm'
import { PostList } from 'src/components/organisms/PostList';

const OpenSpace: VFC = () => {
  return (
    <Layout title='OpenSpace'>
      <div>
        <div className='flex flex-col items-center'>
          <Description title='質問広場' text='質問広場です'/>
          <InputForm/>
          <PostList />
        </div>
      </div>
    </Layout>
    )

}

export default OpenSpace;
