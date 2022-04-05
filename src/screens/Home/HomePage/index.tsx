import {Block, Text} from '@/components/common';
import React from 'react';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const homeReducer: any = useSelector((state: any) => state.homeReducer || {});

  return (
    <Block flex={1} bg="mainBgColor">
      <Block
        flex={1}
        align="center"
        justify="center"
        flexDirection="column"
        bw={1}
        bc="black">
        <Text fc="text" fs="large" ff="popins">
          Hi Developer,
        </Text>
        <Text fc="text" ff="popins-bold">
          Style system font test
        </Text>
        <Text fc="text">{homeReducer?.heartBeat ? 'Heart Beat' : ''}</Text>
      </Block>
    </Block>
  );
};

export default HomeScreen;
