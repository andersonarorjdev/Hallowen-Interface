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
           <img src={Logo} className="Logo" alt="Logo"/>

           <ul className="Menu">
               <li className="ItemMenu">
                   <a href="/">Graveyard</a>
               </li>
               <li className="ItemMenu"> 
                   <a href="/"> Track Record</a>
                </li>
               <li className="ItemMenu">   
                   <a href="/"> Services</a>
                </li>
               <li className="ItemMenu">
                   <a href="/">Know More</a>
                </li>
               <li className="ItemMenu">
                   <a id="ButtonSuport" href="/">Support</a>
                </li>
           </ul>

       </HeaderTag>
    );
}

export default Header;