import React, { ReactNode, forwardRef } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import getSizeStyles from './prvate/getSizeStyles';

type WithChildren<T = {}> = T & { children?: ReactNode };

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

const NativeSelectPure = forwardRef<
  HTMLSelectElement,
  WithChildren<NativeSelectProps>
>(({ children, className, size, error, disabled, readOnly, ...rest }, ref) => {
  return (
    <span
      className={mergeClassnames(
        'block relative w-full',
        disabled && 'opacity-30 cursor-not-allowed',
        readOnly && 'cursor-not-allowed',
        className && className
      )}
    >
      <select
        ref={ref}
        disabled={disabled || readOnly}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2] cursor-pointer',
          'bg-gohan shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
          getSizeStyles(size as string),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          (disabled || readOnly) && 'cursor-not-allowed hover:shadow-input'
        )}
        {...rest}
      >
        {children}
      </select>
      <ControlsChevronDownSmall
        className={mergeClassnames(
          'absolute top-1/2 ltr:right-3 rtl:left-3 -translate-y-1/2 z-5 pointer-events-none',
          'text-trunks flex-shrink-0 transition-transform',
          size === 'sm' ? 'text-moon-16' : 'text-moon-24'
        )}
      />
    </span>
  );
});

export default NativeSelectPure;
