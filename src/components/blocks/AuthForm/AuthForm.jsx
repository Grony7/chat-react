import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {AuthGoogleButton, LoginWrapper, StyledSection} from './styles.js';
import {useContext} from 'react';
import {Context} from '../../../app/app.jsx';

const AuthForm = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const {user} = await signInWithPopup(auth, provider)
    console.log(user);
  };

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthGoogleButton onClick={login}>
          Войти через Google
        </AuthGoogleButton>
      </LoginWrapper>
    </StyledSection>
  )
}

export default AuthForm
