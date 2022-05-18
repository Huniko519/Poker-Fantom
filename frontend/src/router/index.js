import React from 'react';
import { BrowserRouter ,HashRouter, Switch, Route } from 'react-router-dom'
import Index from '../pages/index';


const routes = (props) =>{

  return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={(Index)} />
                <Route path="/play" component={(Index)} />
            </Switch>
        </BrowserRouter>
    )
  }

export default routes;
