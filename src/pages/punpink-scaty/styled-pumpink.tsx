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
        padding-top:10%;
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
        grid-column-start:2;
        grid-column-end:3;

        grid-row-start: 1;
        grid-row-end:3;

        display: flex;
        flex-direction:column;
        align-items:center;
    }
`;