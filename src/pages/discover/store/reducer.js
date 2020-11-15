import { combineReducers } from "redux-immutable";
import recommendReducer from "../c-cmp/recommend/store/reducer";
import rankingReducer from '../c-cmp/ranking/store/reducer'
const discoverReducer = combineReducers({
    recommend: recommendReducer,
    ranking:rankingReducer
})

export default discoverReducer;