import React, {useEffect, useState} from 'react';
import {AppIcon, Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import {githubService} from '@/api';
import {ReposDto} from '@/models';
import {TouchableOpacity, Linking} from 'react-native';

export const GithubRepos = () => {
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
    <Block mt="large">
      {data?.map((item: ReposDto, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(item.html_url)}>
          <Block bw={1} bc="gray" mb={10} p="small" br="medium">
            <Text fc="white">{item.name}</Text>
            <Text fc="white" pt={5}>
              {item.description}
            </Text>
            <Block mt="small" direction="row">
              <Text fc="white">{item.language}</Text>
              <Block flex={1} direction="row" justify="flex-end" align="center">
                <AppIcon name="star" color="white" />
                <Text fc="white" pl={5}>
                  {item.stargazers_count}
                </Text>
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
      ))}
    </Block>
  );
};
