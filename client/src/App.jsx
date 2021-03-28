import { useState } from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import store from './store';

import { lightTheme } from './theme'

import ExpenseApp from './Components/Expenses/ExpenseApp';

const Body = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0.7em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;


function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>

        <Body>

          <Container>

            <ExpenseApp />

          </Container>

        </Body>

      </ThemeProvider>
    </Provider>

  );
}


export default App;
