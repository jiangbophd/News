import React, { Component } from 'react';
import { Page, Tabbar, Toolbar, Tab, Icon } from 'react-onsenui';
import Home from '../../home/home-container';
import Search from '../../search/search-container';
import Setting from '../../setting/setting-container';
//my tab


class MainTab extends Component {
		constructor() {
				super();
				this.state = {
						index : 0
				}
		}
		
		renderToolbar() {
				const titles = ['首页', '搜索', '设置'];
				const title = this.state.index ? titles[this.state.index] : titles[0];
				return (
					<Toolbar className={'headerBg'}>
							<div className="center"><span className={'headerTitle'}>{title}</span></div>
					</Toolbar>
				);
		}

		renderTabs() {
				return [
						{
								content:<Home key="1" navigator={this.props.navigator}></Home>,
								tab: <Tab key="1" label="首页" icon="md-home"></Tab>
						},
						{
								content:<Search key="2" navigator={this.props.navigator}></Search>,
								tab: <Tab key="2" label="搜索" icon="fa-history"></Tab>
						},
						{
								content:<Setting key="3" navigator={this.props.navigator}></Setting>,
								tab: <Tab key="3" label="设置" icon="md-settings"></Tab>
						}
				]
		}
		render(){
				return (
					<Page renderToolbar={this.renderToolbar.bind(this)}>
							<Tabbar
								swipeable={false}
								position={'bottom'}
								index={this.state.index}
								onPreChange={event => {
										if(event.index !== this.state.index){
												this.setState({index: event.index});
										}
								}}
								renderTabs={this.renderTabs.bind(this)}>
							
							</Tabbar>
					</Page>);
		}
}

export default MainTab;
