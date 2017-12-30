import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'babel-polyfill';
import 'onsenui/css/onsenui.min.css';
import 'onsenui/css/onsen-css-components.min.css'
import './assets/global.css';
import './assets/override.css';
import 'onsenui';
import React from 'react';
import { render } from 'react-dom';
import { runningCordova } from './utils/helpers';
import ons from 'onsenui';

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

import App from './modules/app/app-container';

const bootstrap = () => {
		if (ons.platform.isIPhoneX()) { // Utility function
				// Add empty attribute to the <html> element
				document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
				document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
		}
		let store = configureStore();
		render(
			<Provider store={store}>
					<App></App>
			</Provider>
			, document.getElementById('root'));
};

if(runningCordova){
		document.addEventListener('deviceready', bootstrap, false);
} else {
		bootstrap();
}
