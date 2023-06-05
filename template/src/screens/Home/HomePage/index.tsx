import {githubService} from '@/api';
import {GithubRepos, GitUser} from '@/components/app';
import {Block} from '@/components/common';
import {useApi} from '@/hooks';
import {ProfileDto} from '@/models';
import {userActions} from '@/store/actions';
import React, {useEffect} from 'react';

const HomeScreen = () => {
  const githubRequest = useApi(githubService.getProfile);
  const [data, setData] = React.useState<ProfileDto>();

  const loadData = async () => {
    const response = await githubRequest.request<ProfileDto>();
    if (response.isSuccess) {
      userActions.userProfile(response.data);
      setData(response.data);
    }
  };

  useEffect(() => {
    loadData();
    return () => setData(undefined);
  }, []);

  return (
    <Block flex={1} bg="mainBgColor">
      <GithubRepos headerComponent={<GitUser data={data} />} />
    </Block>
  );
};

export default HomeScreen;
