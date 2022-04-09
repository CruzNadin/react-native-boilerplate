import React, {memo} from 'react';
import LottieView from 'lottie-react-native';
import {getStyleShortcuts} from '@/utils/StyleShortcut';
import {StyleInterface} from '@/interface';
import {LotieInterface} from '@/interface/ILottie';

const AppLottieView = ({
  animation = '',
  autoPlay = true,
  loop = true,
  style,
  ...props
}: LotieInterface | StyleInterface | any) => {
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
