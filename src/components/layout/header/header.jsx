import {
  HeaderWrapper,
  LoginIcon,
  LoginLink,
  LogOutButton,
  LogOutIcon,
  LogOutWrapper,
  StyledSection, UserName, UserPhoto,
  UserWrapper
} from './styles.js';
import Nav from '../nav/nav.jsx';
import {useContext} from 'react';
import {Context} from '../../../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from "firebase/auth";

const Header = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <HeaderWrapper>
      <StyledSection as={'div'}>
        <Nav/>

        {user ?
          <LogOutWrapper>
            <UserWrapper>
              <UserPhoto width={34} height={34} src={user.photoURL} alt='Аватар'/>
              <UserName>{user.displayName.split(' ')[0]}</UserName>
            </UserWrapper>
            <LogOutButton onClick={() => signOut(auth)}>
              <LogOutIcon/>
            </LogOutButton>
          </LogOutWrapper>

          :
          <LoginLink to='/login'>
            Войти
            <LoginIcon/>
          </LoginLink>
        }
      </StyledSection>
    </HeaderWrapper>
  );
};

export default Header;
