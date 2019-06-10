import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from './Loader/Loader';
import Nav from './Nav/Nav';
import { checkId } from '../service/helper';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncPetsPage = lazy(() =>
  import('../pages/PetsPage/PetsPage' /* webpackChunkName: "pets-page" */),
);

const AsyncPetPage = lazy(() =>
  import('../pages/PetPage/PetPage' /* webpackChunkName: "pet-page" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */),
);

const App = () => (
  <div>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route
          path="/pets/:id"
          render={props =>
            checkId(props, 'id') ? (
              <AsyncPetPage {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/pets/:id" component={AsyncPetPage} />
        <Route path="/pets" component={AsyncPetsPage} />
        <Route path="/about" component={AsyncAboutPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
