import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'tachyons';
import './reset.css';
import './App.css';
import NotFound from './components/NotFound'
import Footer from './Footer';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';

import Feed from './components/Feed';
import Homepage from './components/homepage/Homepage';
import About from './components/About/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch> <Route exact path="/" component={Homepage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />

          </Switch>
          <Footer />

        </div>
      </Router>
    </Provider>
  );
}

export default App;
