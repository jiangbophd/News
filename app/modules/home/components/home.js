/**
 * Created by Richard on 11/27/17.
 */
import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import Loader from '../../common/spinner-load/loader';
import CarouselImg from '../../common/carousel-img/carousel-img';
import NewsList from '../../common/news-list/news-list';

class Home extends Component {
		constructor() {
				super();
		}
		
		componentDidMount(){
				this.props.getHomeNewsData(null);
		}
		
		navToNewsDetail() {
			this.props.navigator.pushPage({name: 'NewsDetail', detailData: 'news Detail'});
		}
		
		render() {
				if(this.props.newsData.length === 0){
						return (
							<Page>
									<Loader></Loader>
							</Page>
						);
				}
				return (
					<Page>
							<CarouselImg items={this.props.pics}></CarouselImg>
							<NewsList newsData={this.props.newsData} navToNewsDetail={this.navToNewsDetail.bind(this)}></NewsList>
					</Page>);
		}
}

export default Home;