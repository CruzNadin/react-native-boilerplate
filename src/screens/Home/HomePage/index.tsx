import {AppImage, Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import React, {useEffect} from 'react';
import {githubService} from '@/api';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileDto} from '@/models';
import {GithubRepos} from '@/components/app';
import {userProfile} from '@/store/actions/homeActions';

const HomeScreen = () => {
  const githubRequest = useApi(githubService.getProfile);
  const [data, setData] = React.useState<ProfileDto>();

  const loadData = async () => {
    const response = await githubRequest.request<ProfileDto>();
    if (response.isSuccess) {
      userProfile(response.data);
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
          <Block align="flex-end">
            <AppImage
              url={data?.avatar_url}
              size={60}
              style={{borderRadius: 50}}
            />
          </Block>

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
