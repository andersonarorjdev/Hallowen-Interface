import styled from 'styled-components';

export const PumpinkTag = styled.main`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    height:100vh;
    background: linear-gradient(136.16deg, rgba(91, 135, 75, 0.97) 12.91%, rgba(12, 55, 32, 0.87) 87.68%);
    background-attachment: fixed;

    .Container{
        padding-top:4%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }

    .Image{
        grid-column-start:1;
        grid-column-end:2;

        grid-row-start: 1;
        grid-row-end:3;
    }

    .Text{
        margin-left:10%;
        grid-column-start:2;
        grid-column-end:3;

        grid-row-start: 1;
        grid-row-end:3;

        display: flex;
        flex-direction:column;
        align-items:center;
    }

    .PumpinkText:nth-child(1){
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F8F8FD;
        text-align:left;

        align-self:flex-start;
    }
    .PumpinkText:nth-child(2){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;
        text-align:left;
        color: #FFFFFF;
        align-self:flex-start;
    }
    .PumpinkText:nth-child(3){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;
        color: #FFFFFF;
        align-self:flex-start;
    }
    .PumpinkText:nth-child(4){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;
        color: #FFFFFF;
        align-self:flex-start;
    }
    .pumpinkParagraph {
       
        padding-top:4%;

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        color: #FFFFFF;
        opacity: 0.8;
        align-self:flex-start;
    }
    .Pumpink{
        width:600px;
        height:450px;

        position:relative;
        bottom:10%;
    }
`;