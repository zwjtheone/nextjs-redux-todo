import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../components/header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Header></Header>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
