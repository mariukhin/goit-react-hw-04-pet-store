import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PetsPage from '../pages/PetsPage/PetsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import PetPage from '../pages/PetPage/PetPage';
import Nav from './Nav/Nav';

const App = () => (
  <div>
    <Nav />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Route path="/about" component={AboutPage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </div>
);

export default App;
