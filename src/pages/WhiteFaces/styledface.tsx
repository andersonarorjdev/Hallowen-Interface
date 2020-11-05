import styled from 'styled-components';

export const WhiteFaceTag = styled.div`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    height:100vh;
    background: linear-gradient(130.02deg, #E8CAFB 0.66%, #8A87C1 83.32%);
    box-shadow: 26px 24px 90px rgba(31, 26, 51, 0.13);
    background-attachment: fixed;

   #Container{
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:repeat(2, 1fr);
   }

   .Texto{
    grid-column-start:1;
    grid-column-end:2;

    grid-row-start:1;
    grid-row-end:3;

    display: flex;
    flex-direction:column;
    align-items:center; 
    justify-content:center;

    padding-top:25px;

    .BigText:nth-child(1){

        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;

        /* identical to box height */
        letter-spacing: 0.03em;
        text-transform: uppercase;

        /* Calm Dark */
        color: #303056;

        
    }
    .BigText:nth-child(2){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;

        /* Calm Dark */
        color: #303056;
    }
    .BigText:nth-child(3){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;

        /* Calm Dark */
        color: #303056;
    }
    .BigText:nth-child(4){
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 109%;

        /* Calm Dark */
        color: #303056;
    }
    .BigText:nth-child(5){
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;

        /* or 29px */

        /* Calm Dark */
        color: #303056;
    }

    .ButtonArrowed{
        padding-top:10px;
        padding-left:40%;
        background:none;
        border:none;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        /* identical to box height */
        text-align: right;

        color: #FFFFFF;
    }
    .Arrow{
        padding-left:5px;
    }

   }
   .Imagem{
    grid-column-start:2;
    grid-column-end:3;

    grid-row-start:1;
    grid-row-end:3;
   }
   .Image{
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
   }

   .Stepper{
       padding: 0px 50px 0px 0px;
   }

   .WhiteFace{
        width:600px;
        height:400px;
        position:absolute;
    }


`;

