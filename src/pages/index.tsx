import type { NextPage } from 'next';

import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/molecules/Description';

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className='justify-center items-center'>
        <div className='flex flex-row'>
          <Description title='Reached' text='説明' />
          <img src='/writingNote.webp' alt='test' width='40%'/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
