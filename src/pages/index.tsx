import type { NextPage } from 'next';

import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import {TopDescription} from 'src/assets/DescriptionData';

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className='justify-center items-center '>
        <div className='flex flex-row justify-between'>
          <Description title={TopDescription.title} text={TopDescription.text} />
          <img src='/writingNote.webp' alt='test' width='40%'/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
