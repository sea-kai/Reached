import React, { useEffect, useState } from 'react';
import Amplify, { I18n } from 'aws-amplify';
import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifyAuthContainer,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from 'src/aws-exports';
import { vocabularies } from 'src/assets/amplify/vocabularies';
import { Layout } from 'src/components/templates/Layout';



I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');
Amplify.configure(awsconfig);

const Login: any = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  return (
    authState === AuthState.SignedIn && user ? (
    <div>
      <AmplifySignOut />
      <h2>ログイン後の画面</h2>
      <p>{user.attributes.email}</p>
    </div>
  ) : (
    <Layout title='Login'>
      <AmplifyAuthContainer>
          <AmplifyAuthenticator>
            <AmplifySignUp
              slot='sign-up'
              formFields={[
                { type: 'username' },
                { type: 'password' },
                { type: 'email' },
              ]} />
          </AmplifyAuthenticator>
      </AmplifyAuthContainer>
      </Layout>
      )
  );
}

export default Login;
