import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import CheckboxMultiselect from '../CheckboxMultiselect';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('CheckboxMultiselect', () => {
  test('renders by default', () => {
    const checkboxMultiselect = create(
      renderWithTheme(
        <CheckboxMultiselect
          onChange={() => {}}
          clearSelectedLabel={<span>Clear selected items</span>}
          value={[]}
          maxHeight={250}
          options={[
            { label: 'Game 1', value: 1, id: '1' },
            { label: 'Game 2', value: 2, id: '2' },
            { label: 'Game 3', value: 3, id: '3' },
          ]}
        />
      )
    );

    expect(checkboxMultiselect).toMatchSnapshot();
  });

  test('renders with inner options', () => {
    const checkboxMultiselect = create(
      renderWithTheme(
        <CheckboxMultiselect
          onChange={() => {}}
          clearSelectedLabel={<span>Clear selected items</span>}
          value={[]}
          maxHeight={250}
          options={[
            {
              label: 'Game 1',
              value: 1,
              id: '1',
              innerOptions: [{ label: 'Game 1-1', value: 11, id: '1-1' }],
            },
            {
              label: 'Game 2',
              value: 2,
              id: '2',
              innerOptions: [{ label: 'Game 2-1', value: 21, id: '2-1' }],
            },
            {
              label: 'Game 3',
              value: 3,
              id: '3',
              innerOptions: [{ label: 'Game 3-1', value: 31, id: '3-1' }],
            },
          ]}
        />
      )
    );

    expect(checkboxMultiselect).toMatchSnapshot();
  });

  describe('when renders with onChange handler', () => {
    const onChangeMock = jest.fn();
    let checkboxMultiselect: ReactTestRenderer;

    beforeAll(() => {
      checkboxMultiselect = create(
        renderWithTheme(
          <CheckboxMultiselect
            onChange={onChangeMock}
            clearSelectedLabel={<span>Clear selected items</span>}
            value={[]}
            maxHeight={250}
            options={[
              { label: 'Game 1', value: 1 },
              { label: 'Game 2', value: 2 },
              { label: 'Game 3', value: 3 },
            ]}
          />
        )
      );
    });

    describe('and then clicking on the first option', () => {
      beforeAll(() => {
        const input = checkboxMultiselect.root.findAllByType('input')[0];
        act(() => input.props.onChange({ target: { checked: true } }));
      });

      test('calls onChange handler with selected option', () => {
        expect(onChangeMock).toHaveBeenCalledWith([
          { label: 'Game 1', value: 1 },
        ]);
      });
    });
  });

  describe('when renders with onChange handler and pre-selected value', () => {
    const onChangeMock = jest.fn();
    let checkboxMultiselect: ReactTestRenderer;

    beforeAll(() => {
      checkboxMultiselect = create(
        renderWithTheme(
          <CheckboxMultiselect
            onChange={onChangeMock}
            clearSelectedLabel={<span>Clear selected items</span>}
            value={[{ label: 'Game 1', value: 1 }]}
            maxHeight={250}
            options={[
              { label: 'Game 1', value: 1 },
              { label: 'Game 2', value: 2 },
              { label: 'Game 3', value: 3 },
            ]}
          />
        )
      );
    });

    describe('and then clicking on "clear selection" link', () => {
      beforeAll(() => {
        const clearSelection = checkboxMultiselect.root.findByType('a');
        act(() => clearSelection.props.onClick({ preventDefault: () => {} }));
      });

      test('calls onChange handler with empty array', () => {
        expect(onChangeMock).toHaveBeenCalledWith([]);
      });
    });
  });
});
