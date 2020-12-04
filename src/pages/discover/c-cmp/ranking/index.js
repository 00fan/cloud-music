import { memo, useEffect,useState } from "react"

import { RankWrapper } from './style'

import {getToplistCategoryAction} from './store/actionCreators'
import Category from './c-cmp/category/index'
import Detail from './c-cmp/detail/index'
import { useSelector,useDispatch } from "react-redux"
function Ranking(props) {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getToplistCategoryAction())
    }, [dispatch])
    return (
        <RankWrapper>
            <div className='wrap-v2 content'>
                <div className='left'>
                    <Category history={props.history}></Category>
                </div>
                <div className='right'>
                    <Detail id={props.location.search.slice(props.location.search.indexOf('=')+1)}></Detail>
                </div>
            </div>
        </RankWrapper>
    )
}
export default memo(Ranking)