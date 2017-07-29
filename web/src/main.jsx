import React from 'react';
import ReactDom from 'react-dom';
import RouterConfig from './router.config.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer.jsx';
import defaultState from './store/state.jsx';
let store=createStore(reducer,defaultState)
ReactDom.render(
	<Provider store={store}> 
  		<RouterConfig></RouterConfig>
	</Provider>,
	document.querySelector('#app')
	)