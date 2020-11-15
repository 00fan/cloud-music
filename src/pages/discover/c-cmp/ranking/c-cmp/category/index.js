import { memo, useEffect, useReducer } from 'react'
import { CategoryWrapper } from './style'
import { getTopListAction, getToplistCategoryAction } from '../../store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
function Category() {
    const dispatch = useDispatch()
    const { topListCategory } = useSelector(state => {
        return {
            topListCategory: state.getIn(['discover', 'ranking', 'topListCategory'])
        }
    })
    useEffect(() => {
        dispatch(getToplistCategoryAction())
    }, [dispatch])
    return (
        <CategoryWrapper>
            <div className='yun'>
                云音乐特色榜
            </div>
            {
                topListCategory.slice(0,4).map((item, index) => {
                    return (
                        <div key={item.name} className='category-item'>
                            <div className='img-div'>
                                <img src={item.coverImgUrl}></img>
                            </div>
                            <p className='name'>{item.name} </p>
                            <p className='up'>{item.updateFrequency}</p>

                        </div>
                    )
                })
            }
            <div className='yun'>
                全球音乐特色榜
            </div>
            {
                topListCategory.slice(4,topListCategory.length).map((item, index) => {
                    return (
                        <div key={item.name} className='category-item'>
                            <div className='img-div'>
                                <img src={item.coverImgUrl}></img>
                            </div>
                            <p className='name'>{item.name} </p>
                            <p className='up'>{item.updateFrequency}</p>

                        </div>
                    )
                })
            }
        </CategoryWrapper>
    )
}
export default memo(Category)