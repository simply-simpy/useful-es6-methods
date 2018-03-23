import React from 'react'
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import FeatureList from './components/FeatureList';
const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FeatureList} />
        <Route path = "/feature/:featureID" component={App} />
      </Switch>
    </BrowserRouter>
);
export default Router;
