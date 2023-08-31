import {NavLink, NavSection} from './styles.js';
import {useContext} from 'react';
import {Context} from '../../../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const Nav = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <NavSection>
      <NavLink to='/'>Главная</NavLink>
      {user ? <NavLink to='/chat'>Чат</NavLink> : null}
    </NavSection>
  );
};

export default Nav;
