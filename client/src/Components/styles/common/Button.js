import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  
  background: transparent;
  font: 1.1em 'Roboto', sans-serif;
  font-weight: 600;
  padding: ${props => props.padding ? props.padding : `7px 15px`};
  /* outline: none; */
  
  border-radius: 10px;
  border: 2px solid ${props => props.theme.borderColor}; 
  color: ${props => props.theme.color};
  
  transition: all 0.25s, transition 0.5s;
  
  &:focus{
    outline:none;
    box-shadow: 0px 0px 10px 1.5px ${props => props.theme.boxShadowColor};
  }

  &:hover{
    background: ${props => props.theme.buttonBackground};
    color: ${props => props.theme.buttonColorHover};
    box-shadow: 0px 0px 7px 0.5-px ${props => props.theme.boxShadowColor};
    >svg{
      transform: scale(1.4);
      transition: transform 0.5s;
    }
  }
`;