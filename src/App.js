import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'tachyons';
import './reset.css';
import './App.css';
import NotFound from './components/NotFound'
import Footer from './Footer';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import { Provider } from './components/homepage/CardData';
import Feed from './components/Feed';
import Homepage from './components/homepage/Homepage';
import About from './components/About/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    </Provider>
  );
}

export default App;
