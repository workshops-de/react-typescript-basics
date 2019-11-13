import React, { Fragment } from 'react';
import './App.css';

import BookFormBuildInValidation from './components/BookFormBuildInValidation/BookFormBuildInValidation';

const App: React.FC = () => {
  return (
    <Fragment>
      <BookFormBuildInValidation title={'Create a new Book'} />
    </Fragment>
  );
}

export default App;
