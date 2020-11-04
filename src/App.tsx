import React, {useEffect} from 'react';
import ScaryPage from './pages/home-scary/scary';

import './styles/reset.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    Aos.init({duration:3000})
  }, [])
  return (
    <>
      <ScaryPage  data-aos="fade-up" props="/" />
      <ScaryPage data-aos="fade-up" props="/" />
      <ScaryPage data-aos="fade-up" props="/" />
    </>
  );
}

export default App;
