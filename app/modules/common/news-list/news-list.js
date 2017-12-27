/**
 * Created by Richard on 12/25/17.
 */
import styles from './news-list.css';
import React, { PureComponent }from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-onsenui';
import ImageCache from '../image-cache/image-cache';
class NewsList extends PureComponent{
  constructor(){
    super();
  }
  render(){
    return (
      this.props.newsData.map((item, index) => (
        <ListItem onClick={this.props.navToNewsDetail.bind(this,item)} key={index} tappable
                  style={{paddingTop: '2px', paddingBottom: '2px'}}>
            <div className="left">
                <ImageCache remoteUrl={item.pic} className={styles.listItemImg}></ImageCache>
            </div>
            <div className="center">
                <div className={styles.listItemTitle}>
                    {item.title}
                </div>
                <div className={styles.listItemSubtitle}>
                    <span className={styles.listItemStatus}>{item.src}</span>
                    <span className={styles.listItemTime}>{item.time}</span>
                </div>
            </div>
        </ListItem>
      ))
    );
  }
};

NewsList.propTypes = {
		newsData: PropTypes.array.isRequired,
		navToNewsDetail: PropTypes.func.isRequired
}

export default NewsList;
