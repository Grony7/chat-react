import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {AuthGoogleButton, LoginWrapper, StyledSection} from './styles.js';
import {useContext} from 'react';
import {Context} from '../../../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const AuthForm = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const {user} = await signInWithPopup(auth, provider)
    console.log(user);
  };

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthGoogleButton onClick={login}>
          {user ?
              'Сменить аккаунт'
            :
              'Войти через Google'
          }
        </AuthGoogleButton>
      </LoginWrapper>
    </StyledSection>
  )
}

export default AuthForm
