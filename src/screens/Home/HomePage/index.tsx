import {Block, Text} from '@/components/common';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Block mt={10} mb={30} bg="red">
        <Text color="white">Hi</Text>
        <Text color="white">Hi</Text>
      </Block>
    </View>
  );
};

export default HomeScreen;
