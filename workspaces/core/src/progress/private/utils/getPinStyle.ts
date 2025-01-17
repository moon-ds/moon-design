import type Sizes from '../types/Sizes';

const getPinStyle = (size?: Sizes) => {
  switch (size) {
    case '6xs':
      return 'bottom-[18px] -end-3 before:w-3 before:h-3 before:-bottom-[25px]';
    case '5xs':
      return 'bottom-5 -end-3 before:w-3 before:h-3 before:-bottom-[26px]';
    case '4xs':
      return 'bottom-6 -end-3 before:w-3 before:h-3 before:-bottom-7';
    case '3xs':
      return 'bottom-7 -end-3 before:w-3 before:h-3 before:-bottom-[30px]';
    case '2xs':
    default:
      return 'bottom-8 -end-2.5 before:w-4 before:h-4 before:-bottom-[34px]';
  }
};

export default getPinStyle;
