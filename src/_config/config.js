import { getReactAppEnv } from 'utils/envUtils';

export const config = {
  appName: 'Test App',
  ...getReactAppEnv(),
};
