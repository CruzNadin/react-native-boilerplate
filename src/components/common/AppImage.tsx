import React, {memo} from 'react';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import {ImageInterface, StyleInterface} from '@/interface';
const Image = createImageProgress(FastImage);

const AppImage = ({
  url,
  size,
  width,
  height,
  style,
  ...otherProps
}: ImageInterface | StyleInterface | any) => {
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
