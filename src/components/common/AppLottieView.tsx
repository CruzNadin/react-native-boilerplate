import React, {memo} from 'react';
import LottieView from 'lottie-react-native';
import {getStyleShortcuts} from '@/utils/StyleShortcut';

type LottieViewProps = {
  animation: string;
  autoPlay?: boolean;
  loop?: boolean;
  style?: object;
  color?: string;
};

const AppLottieView = ({
  animation = '',
  autoPlay = true,
  loop = true,
  style,
  ...props
}: LottieViewProps) => {
  return (
    <LottieView
      source={animation}
      autoPlay={autoPlay}
      loop={loop}
      style={style}
      colorFilters={[
        {
          keypath: 'logo',
          ...getStyleShortcuts(props),
        },
        {
          keypath: 'BG',
          ...getStyleShortcuts(props),
        },
      ]}
      {...props}
    />
  );
};

export default memo(AppLottieView);
