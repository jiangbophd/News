/**
 * Created by Richard on 12/26/17.
 */
import React, { PureComponent } from 'react';
import {Carousel, CarouselItem} from 'react-onsenui';
import PropTypes from 'prop-types';
import styles from './carousel-img.css';
import ImageCache from '../image-cache/image-cache';

class CarouselImg extends PureComponent {
		constructor() {
				super();
				this.state = {carouselIndex: 0};
		}
		
		handleChange(event) {
				this.setState({carouselIndex: event.activeIndex})
		}
		
		setIndex(index) {
				this.setState({carouselIndex: index});
		}
		
		render() {
				return (
					<div className={styles.carouselRoot}>
							<Carousel className={styles.carouselHeight} onPostChange={this.handleChange.bind(this)}
							          index={this.state.carouselIndex} swipeable autoScroll overscrollable>
									{
											this.props.items.map((item, index) => (
												<CarouselItem className={styles.carouselHeight} key={index}>
														<ImageCache remoteUrl={item.pic} className={styles.imgStyle}></ImageCache>
												</CarouselItem>
											))
									}
							</Carousel>
							<div className={styles.cursorStyle}>
									{
											this.props.items.map((item, index) => (
												<span key={index} style={{cursor: 'pointer'}} onClick={this.setIndex.bind(this, index)}>
														{
																this.state.carouselIndex === index ? '\u25CF' : '\u25CB'
														}
												</span>
											))
									}
							</div>
					</div>
				);
		}
}

CarouselImg.propTypes = {
		items: PropTypes.array.isRequired
}

export default CarouselImg;