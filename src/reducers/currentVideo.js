import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  // might not need this unless there is a way for state to be undefined
  // if(state === undefined){
  //   return 
  // }
  if(action.type === "CHANGE_VIDEO"){
    return action.video;
  } else {
    return state;
  }

};

// this.setState(currentVideoReducer(currentState, action))

export default currentVideoReducer;
