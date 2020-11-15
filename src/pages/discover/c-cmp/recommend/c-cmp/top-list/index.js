import { memo } from "react"

import TopListHeader from '../../../../../../components/theme-header-recommend/index'
import {TopListWrapper} from './style'
function TopList(){
    return(
        <TopListWrapper>
            <TopListHeader title='榜单'></TopListHeader>
        </TopListWrapper>
    )
}
export default memo(TopList)