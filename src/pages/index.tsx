import type { NextPage } from 'next';

import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { TopDescription } from 'src/assets/DescriptionData';


const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className=''>
        <div className='flex flex-row justify-between'>
          <Description title={TopDescription.title} text={TopDescription.text} />
          <img src='/Study.png' alt='study' width='60%' />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
