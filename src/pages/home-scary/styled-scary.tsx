import styled from 'styled-components';

const ScaryPageTag = styled.main`
       
   #Container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

   }

    .Image{
        grid-column-start:1;
        grid-column-end:2;

        background-color:green;
    }

    .Text{
        grid-column-start:2;
        grid-column-end:3;

        background-color:green;
    }

`;

export default ScaryPageTag;
