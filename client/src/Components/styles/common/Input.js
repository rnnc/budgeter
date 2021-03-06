import styled from 'styled-components';

export default styled.input`
  outline:none;
  background: rgba(190,190,190, 0.7);
  border: 2px ${props => props.theme.inputBorder} solid;
  border-radius: 9px;
  padding: 5px 7px;
  text-align: center;
  font-size: 0.8em;
  transition: all 0.2s;
  min-width: 1.5em;
  &:hover{
    background: rgba(150,150,150, 0.7);
    border: 2px rgba(170,170,170, 0.5) solid;
  }
  &:focus{
    background: rgba(129,169,252,0.7);
    border: 2px rgba(51, 84, 249,0.5) solid;
    transition: all 0.25s;
  }
`;