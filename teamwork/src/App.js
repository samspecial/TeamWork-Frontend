import React from 'react';

import './App.css';


import Header from './components/homepage/Header'
import CardList from './components/homepage/CardList'
import SignUp from './components/layout/SignUp'
import Footer from './components/layout/Footer'
import { Provider } from './components/homepage/CardData'
import 'tachyons'

function App() {
  return (
    <Provider>
      <div className="App">


        <Header />
        <CardList />
        <SignUp />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
