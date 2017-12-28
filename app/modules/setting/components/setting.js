/**
 * Created by Richard on 12/25/17.
 */
import React, {Component} from 'react';
import checkAppUpdate from '../../../utils/code-push';
import { Page, Toolbar, ListItem, Icon, SearchInput } from 'react-onsenui';

class Setting extends Component {
  constructor() {
    super();
  }
		
  checkAppUpdate(content) {
      checkAppUpdate();
  }
  
  render() {
    return (
      <Page>
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'10px'}} tappable>
          <div className='left'>
            <Icon icon="info-circle"></Icon>
          </div>
          <div className='center'>
            当前版本
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'30px'}}  tappable>
          <div className='left'>
            <Icon icon="fa-lightbulb-o"></Icon>
          </div>
          <div className='center'>
            亮度调节
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'1px'}}  tappable>
          <div className='left'>
            <Icon icon="fa-eraser"></Icon>
          </div>
          <div className='center'>
            清除缓存
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'1px'}} tappable>
          <div className='left'>
            <Icon icon="fa-cloud-download"></Icon>
          </div>
          <div className='center' onClick={this.checkAppUpdate.bind(this)}>
            检查更新
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'1px'}}  tappable>
          <div className='left'>
            <Icon icon="fa-pencil"></Icon>
          </div>
          <div className='center'>
            意见反馈
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
  
        <ListItem style={{backgroundColor:'white', height: '50px', marginTop:'30px'}}  tappable>
          <div className='left'>
            <Icon icon="fa-file-text-o"></Icon>
          </div>
          <div className='center'>
            用户协议
          </div>
          <div className='right'>
            <Icon icon="fa-angle-right"/>
          </div>
        </ListItem>
        
      </Page>
    );
  }
}

export default Setting;

