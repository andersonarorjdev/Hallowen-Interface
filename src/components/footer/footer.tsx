import React from 'react';

import {FooterTag} from './styled-footer';

interface Param {
    props: any;
}

const Footer:React.FC<Param> = props =>{
    return(
        <FooterTag>
            Footer
        </FooterTag>
    );   
}

export default Footer;