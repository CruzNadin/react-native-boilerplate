import {Block, Text} from '@/components/common';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block flex={1}>
      <Block
        flex={1}
        align="center"
        justify="center"
        flexDirection="column"
        bw={1}
        bc="black">
        <Text color="black" fs="large" ff="popins">
          Hi Developer,
        </Text>
        <Text color="black" ff="popins-bold">
          Style system font test
        </Text>
      </Block>
    </Block>
  );
};

export default HomeScreen;
