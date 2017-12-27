/**
 * Created by Richard on 12/24/17.
 */
import React, { Component } from 'react';

import { Page, Toolbar, ToolbarButton, Icon, BackButton } from 'react-onsenui';

class NewsDetail extends Component {
  constructor() {
    super();
    this.state = {
      calindex: 0,
      state: 'action',
    }
  }
  
  componentDidMount() {
    alert(this.props.detailData);
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
        <section>
          <div>
            this is detail Data
          </div>
        </section>
      </Page>
    );
  }
}

export default NewsDetail;

