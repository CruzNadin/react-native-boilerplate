import React, {memo} from 'react';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
const Image = createImageProgress(FastImage);

type AppImageProps = {
  url: string | any;
  size?: number;
  width?: number;
  height?: number;
  style?: any;
};

const AppImage = ({
  url,
  size,
  width,
  height,
  style,
  ...otherProps
}: AppImageProps) => {
  return (
    <Image
      source={
        typeof url === 'string'
          ? {uri: url, priority: FastImage.priority.high}
          : url
      }
      indicatorProps={{
        color: '#0e1117',
      }}
      resizeMode={FastImage.resizeMode.cover}
      style={{
        width: width ? width : size,
        height: height ? height : size,
      }}
      imageStyle={style}
      {...otherProps}
    />
  );
};

export default memo(AppImage);
