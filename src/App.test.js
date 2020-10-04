import React from 'react';
import RactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {configureStore} from './redux';
import App from './App';

it('Should render App component successfully', () => {
  const store = configureStore();
  const div = document.createElement('div');
  RactDOM.render(<Provider store={store}> <BrowserRouter> <App/> </BrowserRouter> </Provider>, div);
  RactDOM.unmountComponentAtNode(div);
});
