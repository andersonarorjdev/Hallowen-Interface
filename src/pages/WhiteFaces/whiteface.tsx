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
                <main data-aos="slide-left" id="Container">
                   
                </main>
        </WhiteFaceTag>
    );
}

export default WhiteFaces;