import {NavLink} from './styles.js';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/chat'>Чат</NavLink>
    </nav>
  );
};

export default Nav;
