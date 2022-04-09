import React, {FC, memo} from 'react';
import {Text, TextStyle} from 'react-native';
import {getStyleShortcuts} from '@/utils/StyleShortcut';
import {StyleInterface} from '@/interface';

const IText: FC<StyleInterface | any> = ({children, ...props}) => {
  return (
    <Text style={[getStyleShortcuts(props), props.style]}>{children}</Text>
  );
};

export default memo(IText);
