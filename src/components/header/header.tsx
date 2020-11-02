//Imports from react
import React from 'react';

//Imports from styled-components
import HeaderTag from './styled-header';

//Imports from images and icons
import Logo from '../../images/Logo.svg';

//Interfaces and types
interface Param{
    props: any
}

const Header:React.FC<Param> = _ =>{
    return(
       <HeaderTag>
           <img src={Logo} alt="Logo"/>

           <ul className="Menu">
               <li>Graveyard</li>
               <li>Track Record</li>
               <li>Services</li>
               <li>Know More</li>
               <li>Support</li>
           </ul>

       </HeaderTag>
    );
}

export default Header;