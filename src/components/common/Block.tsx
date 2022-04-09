import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {getStyleShortcuts} from '@/utils/StyleShortcut';
import {BlockInterface} from '@/interface';

const Block: FC<BlockInterface | any> = ({children, ...props}) => {
  return (
    <View style={[getStyleShortcuts(props), props.style]}>{children}</View>
  );
};

export default memo(Block);
