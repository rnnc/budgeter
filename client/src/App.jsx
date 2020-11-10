import React, { useState } from 'react';
/* import {
  BrowserRouter as Router,
  Link as RouterLink, Switch
} from 'react-router-dom'; */

//import styled from 'styled-components';

import {
  useTheme, Link,
  Input, Box, Flex, Button
} from '@chakra-ui/core';

//import { styled } from 'styled-components';

import Expense from './Components/Expenses/Expense';

/* const Body = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0.7em;
`; */

//const AddButton =



function App() {
  const theme = useTheme();
  const [expenses, setExpense] = useState();

  function addNewExpense(amount, name, type, data) {

  }

  return (
    <Box
      background={theme.colors}
    >

      <Button variatn="outine"> Add Expense </Button>

      <Flex
        position="relative"
        flex="1"
        direction="column"
        minH="100vh"
        padding="0 0.7em"
      >

        <Flex
          direction="row"
          padding="1em 0"
        >
          <label> Total Budget </label>
          <span style={{ padding: "0 1em" }}>
            <Input
              placeholder="income"
              maxW="15em"
              padding="4px 7px"
            />
          </span>
        </Flex>

        {expenses}

      </Flex>
    </Box>
  );
}

export default App;
