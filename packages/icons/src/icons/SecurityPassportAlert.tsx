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
      d="M25.91 28.439v.5h.011l-.011-.5zm-17.43 0v-.5h-.005l.005.5zm-1.215-1.09h-.5v.025l.003.025.497-.05zM27.522 6.502l.014-.5h-.014v.5zm.468.66l-.477-.151-.013.042-.006.045.496.063zm-1.116 20.187h-.5v.025l.002.025.498-.05zM14.39 25.715a.5.5 0 001 0h-1zm-5.447 0a.5.5 0 001 0h-1zm7.58-7.036a.5.5 0 100 1v-1zm1.63 1a.5.5 0 100-1v1zm-1.63.634a.5.5 0 000 1v-1zm2.992 1a.5.5 0 100-1v1zm1.911-1a.5.5 0 100 1v-1zm2.99 1a.5.5 0 100-1v1zm-11.16-8.626a.5.5 0 000 1v-1zm7.08 1a.5.5 0 100-1v1zm-3.812 9.35a.5.5 0 100 1v-1zm1.629 1a.5.5 0 100-1v1zm-1.634.633a.5.5 0 100 1v-1zm2.723 1a.5.5 0 000-1v1zm2.184-1a.5.5 0 100 1v-1zm2.99 1a.5.5 0 100-1v1zM11.778 6.002a.5.5 0 100 1v-1zm-4.379 8.053a.5.5 0 00-.98.2l.98-.2zM25.91 27.94H8.48v1h17.43v-1zm-17.435 0a.71.71 0 01-.48-.182l-.668.745c.318.285.73.44 1.158.437l-.01-1zm-.48-.182a.71.71 0 01-.232-.457l-.995.099c.042.424.242.818.56 1.103l.667-.745zm-.23-.408V15.911h-1v11.438h1zM27.507 7.002h.003l.471-.881a1.006 1.006 0 00-.445-.119l-.029 1zm.003 0l.002.003.816-.58a1.006 1.006 0 00-.346-.304l-.472.882zm.002.003l.002.003.987-.156a1.005 1.005 0 00-.174-.427l-.815.58zm.002.003v.003l.953.301c.047-.148.059-.306.034-.46l-.987.156zm-.02.09l-1.116 8.75.992.126 1.116-8.75-.992-.126zm-1.12 8.813v11.438h1V15.911h-1zm.002 11.488a.492.492 0 01-.021.2l.951.307a1.49 1.49 0 00.065-.607l-.995.1zm-.021.2a.49.49 0 01-.1.174l.75.663c.135-.154.238-.334.302-.53l-.952-.307zm-.1.174a.493.493 0 01-.16.12l.42.907c.187-.086.353-.21.49-.364l-.75-.663zm-.16.12a.491.491 0 01-.197.046l.023 1c.206-.005.408-.052.594-.139l-.42-.907zM7.264 16.411h19.609v-1H7.265v1zm4.902 7.08c.566 0 1.11-.224 1.51-.625l-.708-.707a1.134 1.134 0 01-.802.332v1zm1.51-.625c.4-.4.625-.943.625-1.509h-1c0 .301-.12.59-.333.802l.707.707zm.625-1.509v-.544h-1v.544h1zm0-.544c0-.566-.225-1.11-.626-1.51l-.707.708c.213.213.333.501.333.802h1zm-.626-1.51c-.4-.4-.943-.624-1.509-.624v1c.301 0 .59.12.802.332l.707-.707zm-1.509-.624c-.566 0-1.108.225-1.509.625l.708.707c.212-.213.5-.332.801-.332v-1zm-1.509.625c-.4.4-.625.943-.625 1.509h1c0-.301.12-.59.333-.802l-.708-.707zm-.625 1.509v.544h1v-.544h-1zm0 .544c0 .566.225 1.11.625 1.51l.708-.708a1.134 1.134 0 01-.333-.802h-1zm.625 1.51c.4.4.943.624 1.51.624v-1c-.301 0-.59-.119-.802-.332l-.708.707zm4.733 2.848v-1.09h-1v1.09h1zm0-1.09c0-.888-.684-1.424-1.305-1.712a4.893 4.893 0 00-1.919-.422v1c.401 0 1.009.103 1.5.33.51.236.724.517.724.804h1zm-3.224-2.134c-.525 0-1.279.127-1.918.422-.62.288-1.305.824-1.305 1.712h1c0-.287.214-.568.724-.804a3.901 3.901 0 011.5-.33v-1zm-3.223 2.134v1.09h1v-1.09h-1zm7.58-4.946h1.63v-1h-1.63v1zm0 1.634h2.992v-1h-2.991v1zm4.903 0h2.99v-1h-2.99v1zm-8.17-7.626h7.08v-1h-7.08v1zm3.268 10.35h1.629v-1h-1.63v1zm-.005 1.633h2.723v-1H16.52v1zm4.907 0h2.99v-1h-2.99v1zm-9.65-18.668h15.745v-1H11.778v1zm-4.022 8.81l-.357-1.757-.98.2.357 1.755.98-.199z"
      fill="currentColor"
    />
    <path
      d="M5.242 13.622l.211-.359-.211.359zm2.757 0l-.211-.359.211.359zm-.962-8.379a.417.417 0 00-.833 0h.833zm-.833 3.334a.417.417 0 10.833 0h-.833zm.833 1.65a.417.417 0 00-.833 0h.833zm-.833.641a.417.417 0 00.833 0h-.833zM4.12 2.848h5v-.834h-5v.834zm7.083 2.083v3.325h.833V4.931h-.833zM2.037 8.256V4.931h-.833v3.325h.833zm3.416 5.007c-2.006-1.184-3.416-2.966-3.416-5.007h-.833c0 2.452 1.685 4.461 3.826 5.725l.423-.718zm5.75-5.007c0 2.041-1.409 3.823-3.415 5.007l.423.718c2.141-1.264 3.826-3.273 3.826-5.725h-.833zM5.03 13.981c.98.578 2.2.578 3.181 0l-.423-.718a2.299 2.299 0 01-2.335 0l-.423.718zM9.12 2.848c1.151 0 2.084.932 2.084 2.083h.833a2.917 2.917 0 00-2.916-2.917v.834zm-5-.834a2.917 2.917 0 00-2.916 2.917h.833c0-1.15.933-2.083 2.084-2.083v-.834zm2.084 3.23v3.333h.833V5.243h-.833zm0 4.982v.642h.833v-.642h-.833z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityPassportAlert =
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
export default SecurityPassportAlert;
