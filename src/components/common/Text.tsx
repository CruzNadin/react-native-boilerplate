import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {getStyleShortcuts} from '@/utils/StyleShortcut';

type Props = {
  props?: TextStyle;
  children: string;
};

const IText: FC<Props | any> = ({children, ...props}) => {
  return (
    <Text style={[getStyleShortcuts(props), props.style]}>{children}</Text>
  );
};

export default IText;
