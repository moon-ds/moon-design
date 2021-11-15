import React from 'react';

import { ListItem, SingleSelect } from '@heathmont/moon-core';

const optionsAsString = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: <ListItem>Option 1</ListItem>,
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: <ListItem>Option 2</ListItem>,
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: <ListItem>Option 3</ListItem>,
  },
];

const Example = () => (
  <div className="flex flex-col justify-around items-center">
    <div className="flex justify-around items-center w-96">
      <SingleSelect
        options={optionsAsString}
        variant="primary"
        placeholderValue={<div>Choose an option</div>}
      />
    </div>
  </div>
);

export default Example;
