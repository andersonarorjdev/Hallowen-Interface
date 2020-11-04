import styled from 'styled-components';

export const FooterTag = styled.footer`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    margin-top:20px;

    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:1fr 1fr;
    /* height:auto; */
    padding:40px 0px 0px 0px;

    .Divisao1{
        grid-row-start:1;
        grid-row-end:2;

        grid-column-start:1;
        grid-column-end:2;
    }

    .Divisao2{
        grid-row-start:1;
        grid-row-end:2;

        grid-column-start:2;
        grid-column-end:3;

        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
`;