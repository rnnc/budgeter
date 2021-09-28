import styled from 'styled-components';

export const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  border: 1px solid black;
`;


export const ExpenseViewCont = styled.ul`
  padding:5px;
  display: flex;
  flex-direction: column;
  li{
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 5px 0;
    background: #C6EBBE;
    &:nth-child(4n-1){
      background: #A9DBB8;
    }
    div{
      &.buttons{
        justify-content: flex-end;
        align-items: center;
      }
      display: flex;
      width: 32%;
      padding: 2px;
      border: 1px solid black;
      text-align: start;
      span{
        //border: 1px solid red;
        padding: 2px;
        width: 22px;
        height: auto;
      }
    }
  }
  div.descrip {
    color:green;
  }
`;