import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.121 4.933a.436.436 0 0 1-.633 0 .48.48 0 0 1 0-.66l.982-1.022H5.7v-.933h12.77l-.982-1.022a.48.48 0 0 1 0-.66.438.438 0 0 1 .633 0l1.748 1.82a.48.48 0 0 1 0 .658L18.12 4.933zM1.88 9.36L.13 7.542a.48.48 0 0 1 0-.66L1.88 5.064a.438.438 0 0 1 .633 0 .48.48 0 0 1 0 .66L1.53 6.745H14.3v.932H1.53l.982 1.023a.48.48 0 0 1 0 .659.436.436 0 0 1-.633 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconArrowLeftRight = styled(Svg)(
  ({
    backgroundColor,
    circleColor,
  }: {
    backgroundColor?: string;
    circleColor?: string;
  }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);