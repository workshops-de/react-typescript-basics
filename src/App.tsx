import React, { Fragment } from 'react';
import './App.css';

import SimpleName from './components/SimpleName/SimpleName';
import Counter from './components/Counter/Counter';

const App: React.FC = () => {
  return (
    <Fragment>
      <SimpleName />
      <Counter />
      <Counter initialValue={50} />
    </Fragment>
  );
}

export default App;
