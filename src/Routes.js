import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page1 from './App';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
        <Route path="/" exact component={Page1}/>
        <Route path="/packages" exact component={Page2}/>
        <Route path="/theartistbehindmylogo" exact component={Page3}/>
        <Route path="/justmeandmytripod" exact component={Page4}/>
        <Route path="/about" exact component={Page5}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes;
