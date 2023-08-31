import MainPage from '../components/pages/mainPage/mainPage.jsx';
import ChatPage from '../components/pages/chatPage/chatPage.jsx';
import LoginPage from '../components/pages/loginPage/loginPage.jsx';

export const routes = [
  {
    path: '',
    component: MainPage,
    isAuth: false
  },
  {
    path: 'chat',
    component: ChatPage,
    isAuth: true
  },
  {
    path: 'login',
    component: LoginPage,
    isAuth: false
  },
];
