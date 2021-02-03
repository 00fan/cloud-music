import { NewDiscWrapper } from './style'
import { memo, useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import NewDiscHeader from '../../../../../../components/theme-header-recommend'
import { useDispatch, useSelector } from 'react-redux'

import { getNewDiscAction } from '../../store/actionCreators'
function NewDisc() {
    const dispatch = useDispatch();
    const { newDisc } = useSelector((state) => ({
        newDisc: state.getIn(['discover', 'recommend', 'newDisc'])
    }))

    useEffect(() => {
        dispatch(getNewDiscAction({ limit: 10 }))
    }, [dispatch])

    const swiperRef = useRef()

    if (newDisc) {
        return (
            <></>
        )
    } else {
        <NewDiscWrapper>
            <NewDiscHeader title='新碟上架'></NewDiscHeader>

            <Carousel className='swipper' dots={false} ref={swiperRef}>

                {
                    [0, 1].map((item) => {
                        return (
                            <div key={item} className='carousel-page'>
                                {
                                    newDisc.slice(item * 5, item * 5 + 5).map((iten, index) => {
                                        return (
                                            <div key={iten.id} className='carousel-page-item'>
                                                <img src={iten.picUrl + '?param=120y120'}></img>
                                                <a>{iten.name}</a>
                                                <a>{iten.artist.name}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className='arrow-left' onClick={e => { swiperRef.current.prev() }}></div>
            <div className='arrow-right' onClick={e => { swiperRef.current.next() }}></div>
        </NewDiscWrapper>
    }


}
export default memo(NewDisc)