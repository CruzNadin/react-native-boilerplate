import {Animations} from '@/assets';
import {
  AppImage,
  Block,
  AppButton,
  Text,
  AppLottieView,
} from '@/components/common';
import {RootState} from '@/store';
import {onChangeLanguage} from '@/utils';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Linking, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

export const GitUser = ({data}: any) => {
  const {t} = useTranslation();
  const settingsReducer: any = useSelector(
    (state: RootState) => state.settingsReducer || {},
  );

  return (
    <Block mb="medium" px="medium">
      <Block flex={1} direction="row">
        <AppButton
          onPress={() =>
            Linking.openURL(
              'https://github.com/CruzNadin/react-native-boilerplate',
            )
          }>
          <AppLottieView
            animation={Animations.BackgroundAnimation}
            color="white"
            style={{
              width: 60,
              height: 60,
            }}
          />
        </AppButton>
        <Block flex={1} align="flex-end">
          <AppImage
            url={data?.avatar_url}
            size={60}
            style={{borderRadius: 50}}
          />
        </Block>
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
    </Block>
  );
};
