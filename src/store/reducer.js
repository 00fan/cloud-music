import {combineReducers} from 'redux-immutable'

import discovrReducer from '../pages/discover/store/reducer'
import songReducer from '../pages/song/store/index'

const reducer=combineReducers({
        discover:discovrReducer,
        song:songReducer
})

export default reducer;