import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './components/Layout';
import Comments from './components/Comments';

import { Router, Route, IndexRoute, hashHistory} from "react-router";


ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Layout}>
  
      <Route path="comments" name="comments" component={Comments}></Route>
    </Route>
  </Router>, document.getElementById('root'));
registerServiceWorker();
