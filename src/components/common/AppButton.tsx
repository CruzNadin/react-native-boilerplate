import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Block} from '@/components/common';
import {ButtonInterface} from '@/interface';

const AppButton = ({
  onPress = () => {},
  children = <></>,
  disabled = false,
}: ButtonInterface) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Block>{children}</Block>
    </TouchableOpacity>
  );
};

export default memo(AppButton);
