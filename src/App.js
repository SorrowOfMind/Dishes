import React from 'react';

import {Navbar, DishForm} from './components/index';

import './scss/main.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <DishForm />
    </div>
  )
}

export default App;