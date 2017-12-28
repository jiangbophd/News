/**
 * Created by Richard on 12/24/17.
 */
import React, {Component} from 'react';
import { Page, Toolbar, ToolbarButton, Icon, BackButton } from 'react-onsenui';
import ImageCache from '../../common/image-cache/image-cache';
import renderHTML from 'react-render-html'; //yarn add react-render-html
import styles from './news-detail.css';
class NewsDetail extends Component {
		constructor() {
				super();
		}
		
		handleBack() {
				this.props.navigator.popPage();
		}
		
		renderToolbar() {
				return (
          <Toolbar className={'headerBg'}>
            <div className="left">
              <BackButton onClick={this.handleBack.bind(this)}></BackButton>
            </div>
            <div className="right">
              <ToolbarButton>
                <Icon icon="fa-share" className="headerTitle"></Icon>
              </ToolbarButton>
            </div>
          </Toolbar>
				);
		}
		
		render() {
				return (
          <Page renderToolbar={this.renderToolbar.bind(this)}>
            <section className={styles.detailMarginTop}>
              <h1>{this.props.detailData.title}</h1>
              <div>
                <span>时间:{this.props.detailData.time}</span>
                <span>来源:{this.props.detailData.src}</span>
              </div>
              <ImageCache remoteUrl={this.props.detailData.pic} className={styles.detailImageWidth}></ImageCache>
              <div>
									{renderHTML(this.props.detailData.content)}
              </div>
            </section>
          </Page>
				);
		}
}

export default NewsDetail;

