import styled from 'styled-components';

 export const ScaryPageTag = styled.main`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    height:100vh;
    background: linear-gradient(136.16deg, rgba(46, 9, 22, 0.97) 12.91%, rgba(32, 10, 43, 0.69) 87.68%);
    box-shadow: 26px 24px 90px rgba(31, 26, 51, 0.13);
    background-attachment: fixed;

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
        right:40px;
    }

    .Image{
       width:800px;
       height:512px;
       position:relative;
       bottom:50px;
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
    
    .Buttons{
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items:center;

        padding-top:65px;
    }

    .ButtonStyled{
      /* border:#FF5B79 2px solid; */
      padding:28px;
      background:#FF5B79;
      color:white;
      border-radius:24px;

      font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        text-decoration:none;

        /* identical to box height */
        text-align: center;

        color: #FFFFFF;
    }

    .ButtonArrowed{

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
        padding-left:15px;
    }
`;


