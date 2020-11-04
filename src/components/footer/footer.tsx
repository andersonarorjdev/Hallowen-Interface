//Imports do react
import React from 'react';

//Imports de estilizações do styled components
import {FooterTag} from './styled-footer';

//Imports de imagens
import Guide from '../../assets/Guide.svg';

interface Param {
    props: any;
}

const Footer:React.FC<Param> = props =>{
    return(
        <FooterTag>
            <div className="Divisao1">
            </div>

            <div className="Divisao2">
                <div>
               Button
                </div>
                <div>
                    <img src={Guide} />
                </div>
            </div>
        </FooterTag>
    );   
}

export default Footer;