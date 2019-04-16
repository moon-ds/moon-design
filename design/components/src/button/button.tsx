/** @jsx jsx */
import * as React from 'react';
import { CSSObject, jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { border, typography, base } from '@heathmont/sportsbet-tokens';
import { spacing, disabled } from '@heathmont/sportsbet-utils';

import { buttonModifiers, ButtonModifiers } from './modifiers';
import { outlineModifiers } from './outline';
import { buttonMockStateClass, ButtonMockState } from './states';

type ButtonProps = {
  className?: string;
  href?: string;
  modifier: ButtonModifiers;
  disabled?: boolean;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  uppercase?: boolean;
  outline?: boolean;
  onClick?: () => void;
};

/**
 * Styles
 */
const button: CSSObject = {
  padding: `${spacing('small')} ${spacing('medium')}`,
  display: 'inline-block',
  verticalAlign: 'middle',
  fontFamily: 'inherit', // Prevents links rendering as system fonts.
  fontSize: base.fontSize,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: rem(18),
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: 'transparent',
  borderRadius: border.radius.small,
  ...disabled(),
};

/**
 * Component
 */
const Button: React.FC<ButtonProps> = ({
  className,
  href,
  mockState,
  modifier,
  fullWidth,
  uppercase,
  outline,
  ...props
}) => {
  const ButtonElement = !href ? 'button' : 'a';

  /**
   * The idea solution would be something like:
   *   return <ButtonElement/>
   * Unfortunately, TypeScript doesn't like this.
   * Issue: https://github.com/Microsoft/TypeScript/issues/28768
   *
   * Instead we use Emotion's `jsx` factory to render the React component,
   * making use of the `css` prop.
   */
  return jsx(ButtonElement, {
    href,
    css: [
      button,
      modifier && buttonModifiers[modifier],
      outline && outlineModifiers[modifier],
      uppercase && { textTransform: 'uppercase' },
      fullWidth && { width: '100%' },
    ],
    className: mockState && buttonMockStateClass(mockState),
    ...props,
  });
};

Button.defaultProps = {
  modifier: 'primary',
};

export { Button, ButtonProps };