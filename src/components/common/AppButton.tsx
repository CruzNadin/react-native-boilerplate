import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Block} from '@/components/common';

type ButtonProps = {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const AppButton = ({
  onPress = () => {},
  children = <></>,
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Block>{children}</Block>
    </TouchableOpacity>
  );
};

export default memo(AppButton);
