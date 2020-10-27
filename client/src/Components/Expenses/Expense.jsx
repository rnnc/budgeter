import React, { useRef } from 'react'
//import styled from 'styled-components';

import { Flex, Input } from '@chakra-ui/core';

export default function Expense({
  expenseName, expenseType
}) {
  return (
    <Flex
      direction="row"
      padding="1em .5em"
    >
      <label>{expenseName}</label>
      <span>
        <Input
          placeholder={expenseName}
          maxW="15em"
          padding="4px 7px"
        />
      </span>
    </Flex>
  )
}
