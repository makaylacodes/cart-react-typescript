
  //create a component for the grid itself

import styled from 'styled-components';

//designs the page
export const Wrapper = styled.div ` 
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  //set border radius on button so it wouldn't overflow
  button{
    border-radius: 0 0 20px 20px;
  }

  img{
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvectica, sans-serif;
    padding: .1rem;
    height: 50%;
    text-align: center;
    
  }
`;