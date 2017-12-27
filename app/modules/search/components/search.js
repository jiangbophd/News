/**
 * Created by Richard on 12/25/17.
 */
import React, {Component} from 'react';

import { Page, SearchInput } from 'react-onsenui';
class Search extends Component {
  constructor() {
    super();
  }
  
  renderSearchBar() {
    return (
    <div style={{padding:"10px", backgroundColor:"red"}}>
      <SearchInput
        style={{width: "100%"}}
        placeholder='Search' />
    </div>
    
    );
  }
  
  render() {
    return (
      <Page renderFixed={this.renderSearchBar.bind(this)} contentStyle={{marginTop:'50px'}}>
  
      </Page>
    );
  }
}

export default Search;

