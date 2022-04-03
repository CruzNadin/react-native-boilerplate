import {Block, Text} from '@/components/common';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block flex={1}>
      <Block flex align="center" justify="center" flexDirection="column">
        <Text color="black">Hi Developer, </Text>
        <Text color="black">Style system spacing test</Text>
      </Block>
    </Block>
  );
};

export default HomeScreen;
