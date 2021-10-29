import React, { VFC } from 'react';
import { Layout } from 'src/components/templates/Layout';
import { InputForm } from 'src/components/atoms/InputForm'

const OpenSpace: VFC = () => {
  return (
    <Layout title='OpenSpace'>
      <div>
        <p>質問広場ページ</p>
        <InputForm/>
      </div>
    </Layout>
    )

}

export default OpenSpace;
