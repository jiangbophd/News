/**
 * Created by Richard on 11/27/17.
 */
import React, { Component } from 'react';
import { Page, PullHook, Icon } from 'react-onsenui';
import Loader from '../../common/spinner-load/loader';
import CarouselImg from '../../common/carousel-img/carousel-img';
import NewsList from '../../common/news-list/news-list';
import Styles from './home.css';

class Home extends Component {
		constructor() {
				super();
				this.state = {state:'initial'};
		}
		
		componentDidMount(){
				this.props.getHomeNewsData(null);
		}
		
		navToNewsDetail(content) {
			this.props.navigator.pushPage({name: 'NewsDetail', detailData: content});
		}
		
		handleChange(event) {
			this.setState({state: event.state});
		}

		handleLoad(done) {
				this.props.getHomeNewsData(done);
		}

		getContent() {
			switch(this.state.state) {
					case 'initial':
							return <Icon icon="fa-long-arrow-up" className={Styles.spinnerColor}></Icon>;
					case 'preaction':
							return <Icon icon="fa-long-arrow-down" className={Styles.spinnerColor}></Icon>;
					case 'action':
							return <Icon icon="spinner" spin className={Styles.spinnerColor}></Icon>;
			}
		}
		
		loadMore(done) {
				this.props.loadMoreNewsData(done);
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
					<Page onInfiniteScroll={this.loadMore.bind(this)}>
							<PullHook
								threshold-height="200px"
								onChange={this.handleChange.bind(this)}
								onLoad={this.handleLoad.bind(this)}>
									{this.getContent()}
							</PullHook>
							<CarouselImg items={this.props.pics}></CarouselImg>
							<NewsList newsData={this.props.newsData} navToNewsDetail={this.navToNewsDetail.bind(this)}></NewsList>
							{
									this.props.showLoadMoreSpinner.state ?
										<div className={Styles.loadMoreSpinner}> <Icon className={Styles.spinnerColor} spin icon="spinner"></Icon>
										</div>
										: null
							}
					</Page>);
		}
}

export default Home;