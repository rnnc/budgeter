import { useState } from 'react';

export default function useInputValue(initial) {

  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: e => {
      setValue(e.target.value || e.target.innerText)
    }
  };
}