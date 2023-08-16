import MainPage from '../components/pages/main-page/main-page.jsx';
import ChatPage from '../components/pages/chat-page/chat-page.jsx';
import LoginPage from '../components/pages/login-page/login-page.jsx';

export const routes = [
  {
    path: '',
    component: MainPage,
    isAuth: false
  },
  {
    path: 'chat',
    component: ChatPage,
    isAuth: false
  },
  {
    path: 'login',
    component: LoginPage,
    isAuth: false
  },
];
