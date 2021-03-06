import React, { useEffect, useState, VFC } from 'react';
import Amplify, {Auth} from 'aws-amplify';
import awsmobile from 'src/aws-exports';

import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { OpenSpaceDescription } from 'src/assets/DescriptionData';
import { InputForm } from 'src/components/atoms/InputForm';
import { PostList } from 'src/components/organisms/PostList';
import { User } from 'src/types/API';

Amplify.configure(awsmobile);

const OpenSpace: VFC = () => {
  const [currentUserName, setCurrentUserName] = useState("");
  useEffect(() => {
    const getUserName = async() => {
      const currentUser:User = await Auth.currentAuthenticatedUser();
      setCurrentUserName(currentUser.username);
  }
  getUserName()
  }, []);
  return (
    <Layout title='OpenSpace'>
      <div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row justify-between w-screen'>
            <Description title={OpenSpaceDescription.title} text={OpenSpaceDescription.text} />
            <img className='w-2/5' src='/Question.PNG' alt='question'/>
          </div>

          <InputForm userName={currentUserName}/>
          <PostList />
        </div>
      </div>
    </Layout>
    )

}

export default OpenSpace;
