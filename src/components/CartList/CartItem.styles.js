import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid blue;
  padding: 20px;
  background-color: white;
  div {
    flex: 1;
  }

  .information{
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    max-width: 50px;
    height:50px;
  }

  img {
    max-width: 150px;
    object-fit: cover;
    margin-left: 40px;
    margin-right: 40px;
  }
`;