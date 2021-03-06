import { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
//store
import { getTopBannersAction } from './store/actionCreators'

import TopBanner from './c-cmp/top-banner/index'
import HotRecommend from './c-cmp/hot-recommend/index'
import NewDisc from './c-cmp/new-disc/index'
import TopList from './c-cmp/top-list/index'
//style
import {RecommendSwrapper} from './style'
function Recommend(props) {

    return (

        <RecommendSwrapper>
            <TopBanner></TopBanner>
            <div className='content wrap-v2'>
                <div className='content-left'>
                    <div className='g-wrap'>
                        <HotRecommend></HotRecommend>
                        <NewDisc></NewDisc>
                        <TopList></TopList>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='login'>
                        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                        <a>用户登录</a>
                    </div>
                </div>
            </div>
        </RecommendSwrapper>
    )
}


export default memo(Recommend)
// const mapStateToProps=(state)=>{
//     return {
//         topBanners:state.discover.recommend.topBanners
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         getTopbanners:()=>{
//             dispatch(getTopBannersAction())
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))