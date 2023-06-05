import {StyleInterface} from '@/interface';
import {getStyleShortcuts} from '@/utils/StyleShortcut';
import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleProp, Text, ViewStyle} from 'react-native';

interface Props extends StyleInterface {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | ViewStyle;
  i18?: boolean;
}

const IText: FC<Props | never> = ({children, i18 = true, ...props}) => {
  const {t} = useTranslation();

  return (
    <Text style={[getStyleShortcuts(props), props.style]}>
      {i18 ? t(`${children}`) : children}
    </Text>
  );
};

export default memo(IText);
