import {AppImage, Block, Text} from '@/components/common';
import React from 'react';
import {ScrollView, Button, Linking} from 'react-native';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const userReducer: any = useSelector((state: any) => state.homeReducer || {});
  console.log('homeReducer', userReducer);
  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Block flex={1} justify="center" align="center" mt="large">
          <AppImage
            url={userReducer?.userProfile?.avatar_url}
            size={100}
            style={{borderRadius: 50}}
          />
        </Block>
        <Block mt="small">
          <Text color="white" tc="center">
            {userReducer?.userProfile?.bio}
          </Text>
        </Block>
        <Block mt="small" direction="row" justify="center">
          <Text fc="white">
            {userReducer?.userProfile?.followers} Followers
          </Text>
          <Text fc="white"> - </Text>
          <Text fc="white">
            {userReducer?.userProfile?.following} Following
          </Text>
        </Block>
        <Block mt="small">
          <Button
            title="Portfolio"
            onPress={() => Linking.openURL(userReducer?.userProfile?.blog)}
          />
          <Button
            title="Github Profile"
            onPress={() => Linking.openURL(userReducer?.userProfile?.html_url)}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProfilePage;
