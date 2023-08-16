import {BrowserRouter, Route, Routes} from 'react-router-dom'



import {routes} from './routes.data'
import NotFound from '../components/pages/not-found/not-found';
import PageWrapper from '../components/layout/page-wrapper/page-wrapper.jsx';

const Router = () => {
  const {isAuth} = true

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageWrapper />}>
          {routes.map(route => {
            if (route.isAuth && !isAuth) {
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
