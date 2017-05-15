import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
// import App from './App';
import './index.css';
import {Root} from '../src/components/root';

import {About} from '../src/components/about'
import {Header} from '../src/components/header';
import {Strenght} from '../src/components/strenght';
import {Blog} from '../src/components/blog';
import {Contact} from '../src/components/contact';
import {Home} from '../src/components/home';

class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>

        <Route path={"/"} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={"about"} component={About}/>
          <Route path={"strength"} component={Strenght}/>
          <Route path={"blog"} component={Blog}/>
          <Route path={"contact"} component={Contact}/>

        </Route>
      </Router>

    );
  }
}

render(
  <App/>, window.document.getElementById('root'));