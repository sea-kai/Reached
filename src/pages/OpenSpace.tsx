import React, { VFC } from 'react';
import { Layout } from 'src/components/templates/Layout';
import { InputForm } from 'src/components/atoms/InputForm'
import { PostList } from 'src/components/organisms/PostList';

const OpenSpace: VFC = () => {
  return (
    <Layout title='OpenSpace'>
      <div>
        <div className='flex flex-col items-center'>
        <p>質問広場ページ</p>
        <InputForm/>
        <PostList />
        </div>
      </div>
    </Layout>
    )

}

export default OpenSpace;
