import {combineReducers} from 'redux-immutable'

import discovrReducer from '../pages/discover/store/reducer'
// import friendReducer from '../pages/friend/store/reducer'

const reducer=combineReducers({
        discover:discovrReducer,
        // friend:friendReducer
})

export default reducer;