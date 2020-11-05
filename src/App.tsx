import React, {useEffect} from 'react';

//Imports to pages
import ScaryPage from './pages/home-scary/scary';
import WhiteFace from './pages/WhiteFaces/whiteface';
import Pumpink from './pages/punpink-scaty/pumpink';

import './styles/reset.css';

function App() {
 
  return (
    <>
      <ScaryPage props="/" />
      <WhiteFace />
      <Pumpink props="/" />
    </>
  );
}

export default App;
