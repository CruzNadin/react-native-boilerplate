import {Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {githubService} from '@/api';
import axios from 'axios';

const HomeScreen = () => {
  const homeReducer: any = useSelector((state: any) => state.homeReducer || {});
  const githubRequest = useApi(githubService.getProfile);

  const loadData = async () => {
    const response = await githubRequest.request();
    console.log('response', response);
    /* axios.get('https://www.google.com').then(response => {
      console.log('response', response);
    }); */
  };

  useEffect(() => {
    loadData();
  }, []);

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
