import * as React from 'react';
import { Switch } from 'react-router';

export default class Intro extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Intro</p>
        <Switch>
          {/* <Route path="/intro/login" component={AsyncComponent(() => import('./login/Login'))} />
          <Route path="/intro/parent" component={AsyncComponent(() => import('./parent/Parent'))} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}
