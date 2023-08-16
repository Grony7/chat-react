import {StyledSection} from './styles.js';
import Nav from '../nav/nav.jsx';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {Context} from '../../../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const Header = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <StyledSection as={'header'}>
      <Nav/>

      {user ?
        <button>Выйти</button>
        :
        <Link to='/login'>Логин</Link>
      }
    </StyledSection>

  );
};

export default Header;
