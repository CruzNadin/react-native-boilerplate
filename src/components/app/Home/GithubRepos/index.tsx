import React, {useEffect, useState} from 'react';
import {AppFlatList, Block} from '@/components/common';
import {useApi} from '@/hooks';
import {githubService} from '@/api';
import {ReposDto} from '@/models';
import {RepoItem} from '@/components/app';

export const GithubRepos = ({headerComponent = <></>}) => {
  const githubRequest = useApi(githubService.getRepos);
  const [data, setData] = useState<ReposDto>();

  const loadData = async () => {
    const response = await githubRequest.request<ReposDto>();
    if (response.isSuccess) {
      setData(response.data);
    }
  };

  useEffect(() => {
    loadData();
    return () => setData(undefined);
  }, []);

  return (
    <Block>
      <AppFlatList
        data={data}
        preloader={githubRequest.loading}
        preloaderHeight={80}
        preloaderLength={10}
        ListHeaderComponent={headerComponent}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => <RepoItem item={item} />}
      />
    </Block>
  );
};
