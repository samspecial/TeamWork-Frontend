import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ArticleList from './components/post/ArticleList';

import Footer from './Footer';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import Article from './components/post/Article';
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
            <Route exact path="/post" component={Article} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/Feed" component={Feed} />

          </Switch>
          <Footer />
          <ArticleList />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
