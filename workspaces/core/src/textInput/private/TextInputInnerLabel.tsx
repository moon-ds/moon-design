import React, { forwardRef } from 'react';
import Container from './Container';
import HintText from './HintText';
import Input from './Input';
import getBorderRadius from './utils/getBorderRadius';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type TextInputProps from '../private/types/TextInputProps';

const TextInputInnerLabel = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      id,
      inputSize,
      type,
      disabled,
      placeholder,
      label,
      hintText,
      isError,
      dir,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      bgColor = 'bg-goku',
      ...rest
    } = props;
    const inputProps = {
      disabled,
      type,
      placeholder,
      dir,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      ...rest,
    };
    return (
      <Container disabled={disabled} inputSize={inputSize}>
        <div
          className={mergeClassnames(
            'w-full max-w-full relative',
            bgColor ? bgColor : 'bg-transparent',
            getBorderRadius(inputSize)
          )}
        >
          <Input
            inputSize={inputSize}
            isError={isError}
            ref={ref}
            id={id}
            isLabel={!!label}
            isRtl={dir === 'rtl'}
            {...inputProps}
          />
          <label className="absolute text-moon-12 text-trunks top-3 z-[1] transition-all ease-in-out duration-200 start-4">
            {label}
          </label>
        </div>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputInnerLabel;
