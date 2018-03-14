import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from './components/Info';
import NavigationBar from './NavigationBar';
import Styling from './Styling';
import Overview from './Overview';
import ArtDirection from './components/ArtDirection';

const App = () => (
  <BrowserRouter>
    <div className="overview-container">
      <NavigationBar />
      <Route path="/info" component={Info} />
      <Route path="/styling" component={Styling} />
      <Switch>
        <Route path="/art-direction" component={ArtDirection} />
        <Route path="/styling" component={Styling} />
        <Route path="*" component={Overview} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
