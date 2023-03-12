import styled from 'styled-components';

const Button = styled.button`
  padding: 25px;
    margin-right: 20px;
    color: #0c0c0c;
    background-color: rgb(245 245 245);
    border-radius: 10px;
    border: none;
    font-size: 30px;

    &:hover,
    &:focus {
      background-color: cadetblue;
      color: white;
    }
`;
export default Button;