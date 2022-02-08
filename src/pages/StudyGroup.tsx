import React, { useState, VFC } from 'react';

import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { StudyGroupDescription } from 'src/assets/DescriptionData';
import { EventInput } from 'src/components/organisms/EventInput';


const StudyGroup: VFC = () => {
  return (
    <Layout title = 'StudyGroup'>
      <div className = ' w-full '>
      <div className = 'justify-center items-center w-full'>
        <div className = 'flex flex-row justify-between'>
          <Description title = {StudyGroupDescription.title} text = {StudyGroupDescription.text}/>
          <img src = '/undraw_Conversation.png' alt = 'studyGroup' width = '40%'/>
        </div>
        <div className = 'flex flex-row'>
          <EventInput />
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default StudyGroup;
