import {githubService} from '@/api';
import {AppImage, Block, Text} from '@/components/common';
import {useApi} from '@/hooks';
import {ProfileDto} from '@/models';
import {RootState} from '@/store';
import {userActions} from '@/store/actions';
import React, {useEffect} from 'react';
import {ScrollView, Button, Linking} from 'react-native';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const userReducer: any = useSelector(
    (state: RootState) => state.userReducer || {},
  );
  const githubRequest = useApi(githubService.getProfile);

  const loadData = async () => {
    const response = await githubRequest.request<ProfileDto>();
    if (response.isSuccess) {
      userActions.userProfile(response.data);
    }
  };

  useEffect(() => {
    if (!userReducer) {
      loadData();
    }
  }, []);

  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Block flex={1} justify="center" align="center" mt={70}>
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
          {userReducer?.userProfile?.blog && (
            <Button
              title="Portfolio"
              onPress={() => Linking.openURL(userReducer?.userProfile?.blog)}
            />
          )}
          {userReducer?.userProfile?.html_url && (
            <Button
              title="Github Profile"
              onPress={() =>
                Linking.openURL(userReducer?.userProfile?.html_url)
              }
            />
          )}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProfilePage;
