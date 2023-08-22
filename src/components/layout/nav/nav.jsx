import {NavLink, NavSection} from './styles.js';

const Nav = () => {
  return (
    <NavSection>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/chat'>Чат</NavLink>
    </NavSection>
  );
};

export default Nav;
