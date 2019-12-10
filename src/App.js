import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound'
import Footer from './Footer';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import Post from './components/post/Post';
import { Provider } from './components/homepage/CardData';
import Feed from './components/Feed';
import 'tachyons';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch> <Route exact path="/" component={Homepage} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/feed" component={Feed} />
            <Route component={NotFound} />

          </Switch>
          <Footer />

        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
