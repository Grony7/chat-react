import {Main} from './styles.js';
import {Outlet} from 'react-router-dom';
import Header from '../header/header.jsx';

const PageWrapper = () => {
  return (
    <>
      <Header/>
      <Main>
        <Outlet/>
      </Main>
    </>
  );
};

export default PageWrapper;
