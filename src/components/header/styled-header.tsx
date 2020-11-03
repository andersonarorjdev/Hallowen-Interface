import styled from 'styled-components';

 const HeaderTag = styled.nav`
       *{
           padding:0;
           margin:0;
           box-sizing:border-box;
       }
        display:flex;
        flex-direction:row;
        justify-content: space-between;

        .Menu a{
            text-decoration:none;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            text-align: right;

            color: #FF5B79;
        }

        .Menu{
            display: flex;
            list-style:none;
            justify-content:space-around;
            align-items: center;

            margin: 50px 40px;
            padding-left:20px;
            padding-right:20px;

        }

        .ItemMenu{
            padding: 0 18px;
            
        }

        #ButtonSuport{
            border: 2px solid #FF5B79;
            padding:7px 20px 7px 20px;
            border-radius:20px;
        }

        .Logo{
            padding-left:110px;
        }
    `;

export default HeaderTag;