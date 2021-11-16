import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.044 5.21v-.06h-.224v.134h-1.327V4.84h-.429v-.777h-.184v.962h-.224v-.268h-5.018v-.146h-.34v-.464h-.13v.283h-.126v.327h-.27c-.29.137-.614.19-.932.155v-.084c.133-.056.08-.092.053-.181a1.586 1.586 0 01-.042-.423c.154-.103.324-.177.504-.22.41-.485 0-1.22-.08-1.637a1.427 1.427 0 00-.382-.19c-1.459-1.049-3.536-.054-2.923 1.785.075.158.12.329.13.503-.368.325-.24.021-.451-.05-.629-.212-1.164.297-1.447.786-.83 1.488-.4 2.679-.643 2.976-.09.355-.816.075-.974.298 0 0-.535 2.26.036 2.381.185.045.42.09.533.105.113.014.122.181.128.264-.072.033-.438.063-.595.123-.26.098.083 2.006.083 2.351-.06.036-.137 0-.202.039-.15.077-.39.893-.322 1.346.033.223.298.199.381.297-.03.735-.476 1.736-.27 2.441.103.348-.075.503-.221.732-.146.23-.03.277-.342.572l-.512.935c-.096.229-.042.574-.131.824-.182.51-.795 1.069-.298 1.617.039.137-.595 2.19-.595 2.506a.465.465 0 00.404.545c.468.065 1.334.071 1.382-.179.047-.25-.108-.408-.164-.595v-1.12c.056-.19.36-.892.369-.985.19-.122.44.024.545-.125.202-.297.175-.938.38-1.42a7.23 7.23 0 00.28-.774c.03-.1-.124-.393-.05-.553a2.35 2.35 0 00.101-.14c.035-.131.082-.259.14-.381.444-.298.271-.262.503-.682.05-.092.298-.137.363-.274.099-.184.033-.434.099-.66.189-.663.438-1.307.744-1.924.079-.134.2-.24.345-.297.298.518.158.404.825.693.077.036.875 1.295.973 1.447.316.488.393.458.964.452.23.227.25.402.182.783v.364c-.036.104-.182.16-.22.297-.021.189-.008.38.038.563-.003.291.027.582.09.866 0 .319.05.893.312 1.093.047.504.067 1.01.06 1.518l-.14.22c-.08.369-.14.741-.182 1.116.273.086.557.13.843.131l.03-.113c.652 0 1.431.595 2.655.22.2-.655-.417-.616-.837-.8a4.276 4.276 0 01-.922-1.075c-.087-.274 0-1.05 0-1.417.143-.194.14-.146.14-.381.214-.387-.14-.703-.051-1.107.045-.19.095-.468.143-.673v-.42c.015-.05.033-.101.05-.152v-.482c.066-.207.083-.428.048-.643-.226-.375-.03-.694-.33-.694-.661-.892-.477-2.065-2.027-3.664-.096-.134-.254-.908 0-1.045.14-.044.297.128.49.131.402-.393.626-2.337.432-2.843-.065-.17-.274-.262-.405-.33-.28-.149-.053-.697.173-.622.226.074.789.432.947.5.56.247.92.53 1.241.467.232-.044 1.19-.94 1.28-1.348a2.31 2.31 0 000-.628c.092-.018.253-.06.363-.084a.039.039 0 00.034-.04 3.488 3.488 0 01-.168-1.249c.462-.297.298-.264.563-.634a.37.37 0 00.137-.047h2.218v-.268h.25v.09h.595v-.132h1.328v.131h.223V5.58h.63v-.37h-.63zm-6.98 2.196a1.654 1.654 0 01-.313-.595h.827c-.092.137-.345.595-.515.595zm.621-.774h-.681v-.119c.184 0 .297-.035.22-.2-.125-.25.423-.234.503-.18.143.106.048.38-.042.511v-.012z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsCounterStrike =
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
export default IconESportsCounterStrike;
