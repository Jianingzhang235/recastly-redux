import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import videoListReducer from './videoList.js';
import currentVideoReducer from './currentVideo.js';

var rootReducer = combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer});
// = (state = {videoList:[], currentVideo:null}, action) => {

  
  // if(action.type === 'CHANGE_VIDEO_LIST'){
  //   videoListReducer(state, action)
  // }
  // if(action.type === 'CHANGE_VIDEO'){
  //   currentVideoReducer(state, action)
  // }

//   combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer})
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

// export default combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer})