import { memo, useEffect,useState,useCallback,useRef} from "react"
import { Carousel } from 'antd';
import {NavLink} from 'react-router-dom'


import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { TopBannersWrapper, BannerLeft, BannerRight } from './style'
import { getTopBannersAction } from '../../store/actionCreators'
function TopBanner() {
    const [currentIndex ,setCurrentIndex ]=useState(0)
    const bannerRef=useRef()
    const { topBanners } = useSelector(state =>(
        {
            topBanners:state.getIn(['discover','recommend','topBanners'])
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('topBannderEffect')
        dispatch(getTopBannersAction())
    }, [dispatch])

    // const bannerChange=(from,index)=>{
    //     setCurrentIndex(index)
    // }
    const bannerChange = useCallback((from,to) => {
        setTimeout(() => {
          setCurrentIndex(to);
        }, 0);
      }, []);
    const bgImg=topBanners[currentIndex]&&topBanners[currentIndex].imageUrl+'?imageView&blur=40x20'

    return (
        <TopBannersWrapper bgImg={bgImg}>
            <div className='wrap-v2 banner'>
                <BannerLeft>
                    <Carousel className='carousel' ref={bannerRef} fade autoplay beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.targetId}>
                                        <NavLink to={'/discover/song'}>
                                            <img src={item.imageUrl}></img>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                        <a href='https://music.163.com/#/download'>

                        </a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                        <span className='shadow'></span>
                </BannerRight>
                <div className='arrowLeft' onClick={e=>{bannerRef.current.prev()}}></div>
                <div className='arrowRight' onClick={e=>{bannerRef.current.next()}}></div>
            </div>

            
        </TopBannersWrapper>
    )
}
export default memo(TopBanner)