import Layout from 'containers/Layout';

import { Global } from '@emotion/react';
import { cssGlobal } from 'styles/global';

const App = () => {
  return (
    <>
      <Layout />
      <Global styles={cssGlobal} />
    </>
  );
};

export default App;