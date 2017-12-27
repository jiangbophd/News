/**
 * Created by Richard on 12/25/17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {runningCordova} from '../../../utils/helpers';
import {
  Page
} from 'react-onsenui';
class ImageCache extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageUrl: require('../../../assets/images/default-img.jpg')
    }
  }
  
  gotDir(dirEntry) {
    let fileNameArray = this.props.remoteUrl.split("/");
    let fileName = fileNameArray[fileNameArray.length - 1];
    dirEntry.getFile(escape(fileName).replace(/%/g, ''), {create: true, exclusive: false}, this.gotFileEntry.bind(this), this.handleFail.bind(this));
  }
  
  gotFS(fileSystem) {
    fileSystem.root.getDirectory("NewsApp", {create: true}, this.gotDir.bind(this));
  }
  
  handleFail(error) {
    // todo
  }
  
  gotFileEntry(fileEntry) {
    fileEntry.getMetadata(data => {
      if (data.size === 0) {
        this.executeDownload(fileEntry.toURL());
      } else {
        console.log('这张图片已经存在'+fileEntry.toURL());
        this.setState({imageUrl: fileEntry.toURL()});
      }
    }, () => {
      this.executeDownload(fileEntry.toURL());
    });
  }
  
  executeDownload(fileURL) {
    let fileTransfer = new FileTransfer();
    let uri = encodeURI(this.props.remoteUrl);
    fileTransfer.download(
      uri,
      fileURL,
      (entry) => {
        this.setState({imageUrl: entry.toURL()})
      },
      (error) =>{
      },
      false
    );
  }
  
  downLoadFileFromRemote() {
    if (runningCordova) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.gotFS.bind(this), this.handleFail.bind(this));
    }else{
      // for browser
      this.setState({imageUrl:this.props.remoteUrl});
    }
  }
  
  componentDidMount() {
    if(this.props.remoteUrl !== ""){
      this.downLoadFileFromRemote();
    }
  }
  
  render() {
    return (
        <img style={this.props.style ? this.props.style : null} className={this.props.className ? this.props.className : null} src={this.state.imageUrl}/>
    );
  }
}

ImageCache.propTypes = {
		remoteUrl: PropTypes.string.isRequired
};

export default ImageCache;
