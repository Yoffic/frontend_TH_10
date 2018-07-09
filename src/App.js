import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Gallery from './components/Gallery';
import Header from './components/Header';
import NotFound from './components/NotFound';


const App = props =>
  //Create Router with force Refresh for reloading content after the button has been clicked
  <BrowserRouter forceRefresh={true}>
    <div className="container">

      {/* Create Header element on every page*/}
      <Route path='/' component={Header} />

      {/*Used Switch tag for the ability to make 404-like error route - component NotFound*/}
      <Switch>

        {/* First page with predefined keyword for Gallery*/}
        <Route exact path="/" render={() =><Gallery keyword='Romano' /> } />

        {/* Creating Gallery based on dynamic keyword from url which will come either from buttons or from search form*/}
        <Route path="/:keyword" render={({match}) => <Gallery keyword={match.params.keyword} /> } />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
