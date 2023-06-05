import {StyleInterface} from '@/interface';
import {getStyleShortcuts} from '@/utils/StyleShortcut';
import React, {FC, memo} from 'react';
import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

interface Props extends StyleInterface {
  children?: React.ReactNode;
  pressable?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle> | ViewStyle;
}

const Block: FC<Props | never> = ({children, ...props}) => {
  if (props.pressable) {
    return (
      <Pressable {...props} style={[getStyleShortcuts(props), props.style]}>
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[getStyleShortcuts(props), props.style]}>{children}</View>
  );
};

export default memo(Block);
