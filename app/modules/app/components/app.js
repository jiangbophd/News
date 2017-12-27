/**
 * Created by Richard on 12/27/17.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-onsenui';
import MainTab from '../../main-tab/main-tab-container';
import NewsDetail from '../../news-detail/news-detail-container';

const ROUTES = {
		MainTab,
		NewsDetail
}

class App extends Component {
		constructor() {
				super();
		}
		
		renderPage(route, navigator) {
				let Scene = ROUTES[route.name];
				return <Scene key={route.name} {...route} navigator={navigator}/>
		}
		
		render(){
				return (
					<Navigator swipeable="swipeable" renderPage={this.renderPage.bind(this)} initialRoute={{name:"MainTab"}}></Navigator>
					);
		}
}

export default App;