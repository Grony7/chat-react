import {BrowserRouter, Route, Routes} from 'react-router-dom'



import {routes} from './routes.data'
import NotFound from '../components/pages/notFound/notFound.jsx';
import PageWrapper from '../components/layout/page-wrapper/page-wrapper.jsx';
import {useContext} from 'react';
import {Context} from '../app/app.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const Router = () => {

  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageWrapper />}>
          {routes.map(route => {
            if (route.isAuth && !user) {
              return false
            }

            if (route.path === '') {
              return  (
                <Route
                  key={route.path}
                  index
                  element={<route.component/>}
                />
              )
            }

            return (
              <Route
                key={route.path}
                path = {route.path}
                element={<route.component/>}
              />
            )
          })}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
