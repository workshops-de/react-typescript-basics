import React, { Fragment } from 'react';
import './App.css';

import BookList from './components/BookList/BookList';

const App: React.FC = () => {
  return (
    <Fragment>
      <BookList />
    </Fragment>
  );
}

export default App;
