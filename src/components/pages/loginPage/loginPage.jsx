import AuthForm from '../../blocks/authForm/authForm.jsx';
import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Context} from '../../../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const LoginPage = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth)

  const navigate = useNavigate();

  useEffect(() => {
      if (user) {
        navigate('/');
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]);

  return (
      <AuthForm />
  );
};

export default LoginPage;
