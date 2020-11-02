//Imports from react
import React from 'react';

//Imports from styled components
import ScaryPageTag from './styled-scary';

//Imports de components
import HeaderComponent from '../../components/header/header';
import Footer from '../../components/footer/footer';

//Interfaces and types
interface Param{
 props: any   
}

const ScaryPage:React.FC<Param> = props=>{

    return(
            <ScaryPageTag>
                <HeaderComponent props="/"/>
                <main id="Container">
                    <div className="Image">
                        Imagem
                    </div>
                    <div className="Text">
                        texto
                    </div>
                </main>
                <Footer props="" />
            </ScaryPageTag>
    );
}
export default ScaryPage