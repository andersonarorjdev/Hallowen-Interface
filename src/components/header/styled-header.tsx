import styled from 'styled-components';

 const HeaderTag = styled.nav`
        width:100vw;
        background-color: red;

        display:flex;
        flex-direction:row;
        justify-content: space-between;
        padding: 30px 20px;

        .Menu{
            display: flex;
            list-style:none;
            justify-content: space-between;
            align-items: center;
        }
    `;

export default HeaderTag;