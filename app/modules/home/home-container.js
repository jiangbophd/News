import { connect } from 'react-redux';
import Home from './components/home';
import * as actions from './home-actions';
import { getPics } from './home-selectors';

const mapStateToProps = state => ({
  newsData: state.home.getNewsData,
  pics:getPics(state),
  showLoadMoreSpinner: state.home.showLoadMoreSpinner
});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
