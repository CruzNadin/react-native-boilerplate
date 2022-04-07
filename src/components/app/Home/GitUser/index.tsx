import {AppImage, Block, Text} from '@/components/common';
import {RootState} from '@/store';
import {onChangeLanguage} from '@/utils';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

export const GitUser = ({data}: any) => {
  const {t} = useTranslation();
  const settingsReducer: any = useSelector(
    (state: RootState) => state.settingsReducer || {},
  );
  return (
    <Block mb="medium" px="medium">
      <Block align="flex-end">
        <AppImage url={data?.avatar_url} size={60} style={{borderRadius: 50}} />
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
