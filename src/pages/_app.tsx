import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<Object>();
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    })
  }, [])
  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <AmplifySignOut />
      <h2>ログイン後の画面</h2>
    </div>

  ) : (
    <AmplifyAuthenticator />
  )
}
export default MyApp
