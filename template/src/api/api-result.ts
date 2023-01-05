export default class ApiResult<T> {
  message: string = '';
  isSuccess: boolean = false;
  data: T | any = null;

  constructor(message?: string, isSuccess?: boolean, data?: T) {
    this.message = message ? message : '';
    this.isSuccess = isSuccess ? isSuccess : false;
    this.data = data;
  }
}
