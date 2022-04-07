import React, {memo} from 'react';
import {
  ActivityIndicator,
  FlatList as FList,
  View,
  ScrollView,
} from 'react-native';
import {Block} from '@/components/common';
import {Placeholder, PlaceholderLine, Progressive} from 'rn-placeholder';

const FlatList = ({
  data,
  renderItem,
  usePagination = false,
  loading,
  onEndReached,
  refreshing,
  onRefresh,
  preloader,
  preloaderLength,
  preloaderWidth,
  preloaderHeight,
  preloaderStyle = {},
  preloaderContainerStyle = {},
  horizontal = false,
  ...props
}: any) => {
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <Block flex={1} justify="center" align="center">
        <ActivityIndicator
          animating
          size="large"
          style={{marginTop: 15, marginBottom: 15}}
        />
      </Block>
    );
  };

  const PreloaderRenderItem = () => (
    <Block mb="small" style={{preloaderContainerStyle}}>
      <PlaceholderLine
        height={preloaderHeight}
        noMargin
        width={preloaderWidth}
        style={preloaderStyle}
      />
    </Block>
  );

  return preloader ? (
    <>
      {props.ListHeaderComponent}
      {horizontal ? (
        <ScrollView horizontal style={[preloaderContainerStyle]}>
          <Placeholder Animation={Progressive}>
            {[...Array(preloaderLength)]?.map((item, index) => (
              <PreloaderRenderItem key={'preloader_item_' + index} />
            ))}
          </Placeholder>
        </ScrollView>
      ) : (
        <View
          style={[
            {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            },
            preloaderContainerStyle,
          ]}>
          <Placeholder Animation={Progressive}>
            {[...Array(preloaderLength)]?.map((item, index) => (
              <PreloaderRenderItem key={'preloader_item_' + index} />
            ))}
          </Placeholder>
        </View>
      )}
    </>
  ) : (
    <FList
      data={data && data.length > 0 ? data : []}
      renderItem={renderItem}
      ListFooterComponent={usePagination ? renderFooter : null}
      onEndReached={usePagination ? onEndReached : null}
      onEndReachedThreshold={0.8}
      onRefresh={onRefresh}
      refreshing={refreshing}
      keyExtractor={(item, index) => 'flat_list_item_' + index}
      removeClippedSubviews
      horizontal={horizontal}
      {...props}
    />
  );
};

export default memo(FlatList);
