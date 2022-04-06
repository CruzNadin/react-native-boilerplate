import React, {useEffect, useState} from 'react';
import {AppIcon, Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import {githubService} from '@/api';
import {ReposDto} from '@/models';
import {TouchableOpacity, Linking} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Loader,
  Shine,
  ShineOverlay,
  Progressive,
} from 'rn-placeholder';
import {IconTypes} from '@/utils';

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
      {githubRequest.loading && (
        <Placeholder Animation={Progressive}>
          {[...Array(10).keys()].map(el => (
            <Block key={el} mb="small">
              <PlaceholderLine height={80} noMargin />
            </Block>
          ))}
        </Placeholder>
      )}
      {data?.map((item: ReposDto, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(item.html_url)}>
          <Block bw={1} bc="border-color" mb={10} p="small" br="small">
            <Text fc="text-color-dark" ff="popins-bold">
              {item.name}
            </Text>
            <Text fc="text-color" pt={5} ff="popins">
              {item.description}
            </Text>
            <Block mt="small" direction="row" align="center">
              {item.language && (
                <>
                  <Block bg="text-color" w={12} h={12} br="large" />
                  <Text fc="text-color" ff="popins" pl={5}>
                    {item.language}
                  </Text>
                </>
              )}

              <Block flex={1} direction="row" justify="flex-end" align="center">
                <AppIcon
                  type={IconTypes.fontAwesome}
                  name="code-fork"
                  color="text-color"
                  size={15}
                />
                <Text fc="text-color" pl={5} ff="popins" pr={10}>
                  {item.forks_count}
                </Text>
                <AppIcon name="star" color="text-color" size={15} />
                <Text fc="text-color" pl={5} ff="popins">
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
