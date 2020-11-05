//Imports to react and components externals
import React from 'react';
import Aos from 'aos';

//Imports to components insiders
import Header from '../../components/header/header';

//Imports to styled components
import {PumpinkTag} from './styled-pumpink';

//Imports to images and assets
import PumpinkImg from '../../images/Pumpink.svg';
import Arrow from '../../assets/arrow.svg';

interface  Pumpink {
    props: any
}

const Pumpink:React.FC<Pumpink> = props =>{
    return(
        <>
        <PumpinkTag>
            <Header color="#dddddddd" props="/" />
            <div data-aos="slide-down" className="Container">
              <div className="Image">
                <img className="Pumpink" src={PumpinkImg} alt=""/>
              </div>
              <div className="Text">
                <h3 className="PumpinkText">#3 Top Scariest Ghost 2020</h3>
                <h3 className="PumpinkText">UOOOO</h3>
                <h3 className="PumpinkText">TRICK OR</h3>
                <h3 className="PumpinkText">TREAT!!</h3>
                <p className="pumpinkParagraph">
                    Hi I’m Reiza, people call me “The Labu” currently I’m <br />
                    trying to learn something new, building my own bike<br />
                    with parts only made from Malaysia.
                </p>
                <button className="ButtonArrowed">
                    Track Record
                    <img src={Arrow} alt=""/>
                </button>
              </div>
            </div>
        </PumpinkTag>
        </>        
    );
}

export default Pumpink;