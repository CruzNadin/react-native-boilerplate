import {AppImage, Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import React, {useEffect} from 'react';
import {githubService} from '@/api';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileDto} from '@/models';
import {GithubRepos} from '@/components/app';
import {userActions} from '@/store/actions';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {onChangeLanguage} from '@/utils';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';

const HomeScreen = () => {
  const {t} = useTranslation();
  const settingsReducer: any = useSelector(
    (state: RootState) => state.settingsReducer || {},
  );

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
      <ScrollView>
        <Block px="medium" pt="small">
          <Block align="flex-end">
            <AppImage
              url={data?.avatar_url}
              size={60}
              style={{borderRadius: 50}}
            />
          </Block>

          <Text fc="white" fs="large" ff="popins">
            {t('hello')} {data?.name},
          </Text>
          <Block direction="row" mt="small">
            <TouchableOpacity onPress={() => onChangeLanguage('tr')}>
              <Text
                fc="white"
                dc={settingsReducer?.language == 'tr' ? 'underline' : 'none'}>
                TR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeLanguage('en')}>
              <Text
                fc="white"
                pl="small"
                dc={settingsReducer?.language === 'en' ? 'underline' : 'none'}>
                EN
              </Text>
            </TouchableOpacity>
          </Block>

          <GithubRepos />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;
