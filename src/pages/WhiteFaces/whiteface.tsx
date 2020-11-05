import React, {useEffect} from 'react';
import Aos from 'aos';

//Imports from styled components
import  { WhiteFaceTag} from './styledface';
import 'aos/dist/aos.css';

//Imports de components
import HeaderComponent from '../../components/header/header';

//Imports de Images
import MainSkull from '../../images/SkullMain.svg';
import Arrow from '../../assets/arrow.svg';
import stepper from '../../assets/stepper.svg';

const WhiteFaces:React.FC = props =>{
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return(
        <WhiteFaceTag>
                 <HeaderComponent props="/"/>
                <main data-aos="slide-left" id="Container">
                    <div className="Image">
                       <img className="Image" src={MainSkull} alt="" />
                    </div>
                    <div className="Text">
                        <div>
                            <h3 className="Texto">#1 TOP SCARIEST GHOST 2020</h3>
                            <h1 className="Texto" >RESPAWN</h1>
                            <h1 className="Texto">THE SPOOKY</h1>
                            <h1 className="Texto">SKULL</h1>
                            <p className="Texto">
                                In search for cute little puppy, Captain Sem has come <br />
                                backfrom his tragic death. With his hogwarts certified<br /> 
                                power he promise to be a hero for all of ghostkind.
                            </p>
                            <div className="Buttons">
                                <a href="/" className="ButtonStyled">
                                    Book Now
                                </a>
                                <button className="ButtonArrowed">
                                    His Track Record
                                    <img className="Arrow" src={Arrow} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className="Stepper" src={stepper} alt=""  />
                        </div>
                    </div>
                </main>
        </WhiteFaceTag>
    );
}

export default WhiteFaces;