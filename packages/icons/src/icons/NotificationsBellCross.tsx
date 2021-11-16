import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.782 22.685h.5a.5.5 0 00-.5-.5v.5zm-5.63 0v-.5a.5.5 0 00-.5.5h.5zM8.36 21.22l-.497-.052.497.052zm9.9-12.192h-.5v.33l.301.13.198-.46zm3.295 4.052l-.478.146.478-.146zm-7.518-4.052l.198.46.302-.13v-.33h-.5zm7.85 7.176l.498-.04-.498.04zm-.172-2.191l-.499.039.498-.04zM8.542 20.707l-.436-.245.436.245zm.837-1.492l.436.244-.436-.244zm3.684-10.233a.5.5 0 00.54.84l-.54-.84zm-2.7 7.117l.497.05-.498-.05zm.612-1.105a.5.5 0 00-.995-.1l.995.1zm7.636 8.191a.5.5 0 000-1v1zm3.822-3.46a.5.5 0 10.894-.448l-.894.447zm.274-.57l-.447.224.447-.223zM7.354 6.85a.5.5 0 10-.708.707l.708-.707zm17.589 19.004a.5.5 0 00.707-.708l-.707.708zm-6.66-3.169A2.315 2.315 0 0115.966 25v1a3.315 3.315 0 003.315-3.315h-1zM15.966 25a2.315 2.315 0 01-2.315-2.315h-1A3.315 3.315 0 0015.967 26v-1zm-2.815-1.815h5.63v-1h-5.63v1zm-5.289-2.018c-.05.481.042.977.318 1.367.288.406.746.651 1.31.651v-1c-.251 0-.4-.097-.494-.23-.106-.148-.17-.386-.14-.684l-.994-.104zM14.537 8.61c0-.89.721-1.611 1.611-1.611V6a2.611 2.611 0 00-2.611 2.611h1zM16.148 7c.89 0 1.611.721 1.611 1.611h1A2.611 2.611 0 0016.15 6v1zm1.913 2.486c1.908.823 2.732 2.813 3.016 3.74l.956-.294c-.3-.98-1.239-3.356-3.576-4.364l-.396.918zm.698-.459v-.416h-1v.416h1zm-4.222 0v-.416h-1v.416h1zm7.848 7.137l-.172-2.192-.997.079.172 2.19.997-.077zM8.978 20.95l.837-1.492-.872-.49-.837 1.493.872.49zm4.626-11.128c.195-.126.405-.24.631-.337l-.396-.918c-.278.12-.536.26-.776.414l.54.84zm-2.744 6.326l.115-1.155-.995-.1-.115 1.155.995.1zm-1.368 7.036h9.12v-1h-9.12v1zm13.835-3.908l-.173-.345-.894.447.173.345.894-.447zm-13.512.182a8.5 8.5 0 001.045-3.31l-.995-.1a7.5 7.5 0 01-.922 2.92l.872.49zm11.573-3.217a8.498 8.498 0 00.872 3.137l.894-.447a7.5 7.5 0 01-.769-2.768l-.997.078zm-.31-3.017c.077.252.114.525.138.826l.997-.079a4.806 4.806 0 00-.18-1.04l-.956.293zm-12.22 8.046a.863.863 0 01.12-.32l-.872-.49a1.84 1.84 0 00-.243.706l.995.104zM6.646 7.557l18.297 18.297.707-.708L7.354 6.85l-.708.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsBellCross =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default NotificationsBellCross;
