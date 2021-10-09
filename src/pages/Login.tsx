import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import Amplify, { I18n } from 'aws-amplify';
import { AmplifySignOut, AmplifyAuthenticator, AmplifySignUp, AmplifyAuthContainer } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from 'src/aws-exports';
import { vocabularies } from 'src/assets/amplify/vocabularies'

I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');
Amplify.configure(awsconfig);

function Login({ Component, pageProps }: AppProps): React.ReactElement {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();
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
      <p>{user.attributes.email}</p>
    </div>

  ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email"}
          ]}/>
      </AmplifyAuthenticator>
      </AmplifyAuthContainer>
  )
}
export default Login;
