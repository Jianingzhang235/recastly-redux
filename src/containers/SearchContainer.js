import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
// import store from '../store/store.js'
const mapStateToProps = (state) =>{
  return {
    currentVideo: state.CurrentVideo,
    videos: state.videos
  }
}

var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
