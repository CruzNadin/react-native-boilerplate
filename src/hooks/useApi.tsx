import React, {useState} from 'react';
import {AxiosResponse} from 'axios';
import ApiResult from '../api/api-result';
import {Alert, StatusBar} from 'react-native';

const useApi = (apiFunc: {
  (...args: []): Promise<AxiosResponse<any>>;
  (arg0: any): any;
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function request<T>(...args: Array<ApiResult<T>>) {
    setLoading(true);
    const response = await apiFunc(args);
    StatusBar.setNetworkActivityIndicatorVisible(false);
    //#region error handling
    setError(response.status !== 200);
    if (response.status === 401) {
      Alert.alert('error', 'user error');
    }
    //#endregion

    //#region data handling
    setData(response.data);
    setLoading(false);
    const result: ApiResult<T> = {
      isSuccess: response.status === 200 ? true : false,
      message: response.status === 200 ? 'success' : 'error',
      data: response.data,
    };
    StatusBar.setNetworkActivityIndicatorVisible(true);
    return result;
    //#endregion
  }

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;
