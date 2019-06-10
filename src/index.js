import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addVideo} from './actions/videos';
import {setTextFilter} from './actions/filters';
import getVisibleVideos from './selectors/videos';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(addVideo({ description: 'Water bill'}));
store.dispatch(addVideo({ description: 'Gas bill'}));

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
