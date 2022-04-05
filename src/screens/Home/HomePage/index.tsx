import {Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {githubService} from '@/api';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileDto} from '@/models';
import {GithubRepos} from '@/components/app';

const HomeScreen = () => {
  const homeReducer: any = useSelector((state: any) => state.homeReducer || {});
  const githubRequest = useApi(githubService.getProfile);
  const [data, setData] = React.useState<ProfileDto>();

  const loadData = async () => {
    const response = await githubRequest.request<ProfileDto>();
    if (response.isSuccess) {
      setData(response.data);
    }
  };

  useEffect(() => {
    loadData();
    return () => setData(undefined);
  }, []);

  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Block px="large" pt="small">
          <Text fc="text" fs="large" ff="popins">
            Hi I'm {data?.name},
          </Text>

          <GithubRepos />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;
