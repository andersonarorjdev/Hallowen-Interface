import React, {useEffect} from 'react';
import Aos from 'aos';

//Imports from styled components
import  { WhiteFaceTag} from './styledface';
import 'aos/dist/aos.css';

//Imports de components
import HeaderComponent from '../../components/header/header';

//Imports de Images
import WhiteFace from '../../images/WhiteFace.svg';
import Arrow from '../../assets/arrow.svg';
import stepper from '../../assets/stepper.svg';

const WhiteFaces:React.FC = props =>{
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return(
        <WhiteFaceTag>
                 <HeaderComponent props="/" color="#dddddd"/>
                <main data-aos="fade-left" id="Container">
                   <div className="Texto">
                        <h3 className="BigText">#2 top Best duo</h3>
                        <h1 className="BigText">BRING BACK</h1>
                        <h1 className="BigText">MY COTTON</h1>
                        <h1 className="BigText">CANDY</h1>
                        <p className="BigText"> 
                        Adino steals his brother cotton candy and eats them <br />
                        all in one bite, such a hungry beast. Grahami can't hold<br /> 
                        any longer his anger to Adino.
                        </p>
                        
                        <button className="ButtonArrowed">
                            His Track Record
                            <img className="Arrow" src={Arrow} />
                        </button>
                   </div>
                   <div className="Image">
                    <img src={WhiteFace} className="WhiteFace" alt="" />
                    <img src={stepper} className="Stepper" alt=""/>
                   </div>
                </main>
        </WhiteFaceTag>
    );
}

export default WhiteFaces;