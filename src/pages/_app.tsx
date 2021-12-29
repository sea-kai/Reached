import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
  <RecoilRoot>
    <Component {...pageProps} />;
  </RecoilRoot>
  )
}
export default MyApp;
