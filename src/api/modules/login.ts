/**
 * @author  x521320930@gmail.com
 * @describe  // 微信相关接口
 * @example 模块名称_接口 命名
 */
import { Params } from '@/interface/axios';
import Axios from '@/utils/axios';
// 获取appid
export const login = (params: Params) => {
  return Axios.post('/login', params);
};
// 通过公众号链接，获取应跳转页面接口
export const signUp = (params: Params) => {
  return Axios.post('/signUp', params);
};
