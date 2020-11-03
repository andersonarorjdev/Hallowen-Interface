import styled from 'styled-components';

 export const ScaryPageTag = styled.main`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    background: linear-gradient(136.16deg, rgba(46, 9, 22, 0.97) 12.91%, rgba(32, 10, 43, 0.69) 87.68%);
    box-shadow: 26px 24px 90px rgba(31, 26, 51, 0.13);

   #Container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

   }

    .Image{
        grid-column-start:1;
        grid-column-end:2;
    }

    .Text{
        grid-column-start:2;
        grid-column-end:3;

        display:flex;
        flex-direction:row;
        justify-content:space-around;
    }

    .Stepper{
        position: relative;
        top:250px;
        right:100px;
    }

    .Image{
        width: 900.21px;
        height: 675.09px;
        position:absolute;
        top:-29px;
        left:-40px;
    }


    .Texto:nth-child(1){
        //FIRST TEXT
        color: #FF5B79;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;

       

        /* identical to box height */
        letter-spacing: 0.03em;
        text-transform: uppercase;
    }

    .Texto:nth-child(2){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 58px;
        line-height: 109%;
        color:#FFFFFF;
    }
    .Texto:nth-child(3){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 58px;
        line-height: 109%;
        color:#FFFFFF;
    }
    .Texto:nth-child(4){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 58px;
        line-height: 109%;
        color:#FFFFFF;
    }

    .Texto:nth-child(5){
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        color: #FFFFFF;
        opacity: 0.8;

        padding-top:20px;
    }
`;


