import React, { VFC } from 'react';
import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { StudyGroupDescription } from 'src/assets/DescriptionData'

const StudyGroup: VFC = () => {
  return (
    <Layout title='StudyGroup'>
      <div className='flex flex-row justify-between w-screen'>
        <Description title={StudyGroupDescription.title} text={StudyGroupDescription.text}/>
        <img className='w-2/5' src='/undraw_Conversation.png' alt='studyGroup' />
      </div>
    </Layout>
  )
}

export default StudyGroup;
