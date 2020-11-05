//Imports to react and components externals
import React from 'react';
import Aos from 'aos';

//Imports to components insiders
import Header from '../../components/header/header';

//Imports to styled components
import {PumpinkTag} from './styled-pumpink';

interface  Pumpink {
    props: any
}

const Pumpink:React.FC<Pumpink> = props =>{
    return(
        <>
        <PumpinkTag>
            <Header color="#dddddddd" props="/" />
            <div className="Container">
              <div className="Image">

              </div>
              <div className="Text">
                <h3 className="PumpinkText">#3 Top Scariest Ghost 2020</h3>
                <h3 className="PumpinkText">UOOOO  TREAT!!</h3>
                <h3 className="PumpinkText">TRICK OR</h3>
                <h3 className="PumpinkText">TREAT!!</h3>
                <p className="pumpinkParagraph">
                    Hi I’m Reiza, people call me “The Labu” currently I’m <br />
                    trying to learn something new, building my own bike<br />
                    with parts only made from Malaysia.
                </p>
              </div>
            </div>
        </PumpinkTag>
        </>        
    );
}

export default Pumpink;