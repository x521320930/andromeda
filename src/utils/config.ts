/**
 * @author  x521320930@gmail.com
 * @describe 相关配置变量
 */
import { isValidKey } from '@/utils/tools';
import { EntryNodeEnvInterface } from '@/interface/config';

const NODE_ENV = {
  development: {
    AXIOS_BASE_URL: '/dev-api',
    JIE_URL: 'https://static-sit1.gomemyf.com/jie-h5-sit1/html'
  },
  test: {
    AXIOS_BASE_URL: `/dev-api`,
    JIE_URL: 'https://static-sit1.gomemyf.com/jie-h5-sit1/html'
  },
  production: {
    AXIOS_BASE_URL: 'https://jie.gomemyf.com'
  }
};

export const ENTRY_NODE_ENV: EntryNodeEnvInterface = isValidKey(NODE_ENV, process.env.NODE_ENV);
