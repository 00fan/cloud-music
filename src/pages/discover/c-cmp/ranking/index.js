import { memo, useEffect } from "react"

import { RankWrapper } from './style'
import { getTopListAction, getToplistCategoryAction } from './store/actionCreators'

import Category from './c-cmp/category/index'
function Ranking() {
    
    return (
        <RankWrapper>
            <div className='wrap-v2 content'>
                <div className='left'>
                    <Category></Category>
                </div>
                <div className='right'></div>
            </div>
        </RankWrapper>
    )
}
export default memo(Ranking)