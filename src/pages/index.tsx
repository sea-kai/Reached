import type { NextPage } from 'next';
import { Layout } from 'src/components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className="justify-center items-center bg-red-300">
        <div>Home</div>
      </div>
    </Layout>
  );
};

export default Home;
