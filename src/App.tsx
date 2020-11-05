import React, {useEffect} from 'react';

//Imports to pages
import ScaryPage from './pages/home-scary/scary';
import WhiteFace from './pages/WhiteFaces/whiteface';

import './styles/reset.css';

function App() {
 
  return (
    <>
      <ScaryPage props="/" />
      <WhiteFace />
    </>
  );
}

export default App;
