import { memo } from 'react'
import { CategoryWrapper } from './style'
import { shallowEqual,useSelector } from 'react-redux'
function Category(props) {
    const { topListCategory } = useSelector(state => {
        return {
            topListCategory: state.getIn(['discover', 'ranking', 'topListCategory'])
        }
    },shallowEqual)
    
    return (
        <CategoryWrapper>
            <div className='yun'>
                云音乐特色榜
            </div>
            {
                topListCategory.slice(0,4).map((item, index) => {
                    return (
                        <div key={item.name} className='category-item' onClick={()=>{props.history.push({search:'?id='+item.id})}}>
                            <div className='img-div'>
                                <img alt='记载中' src={item.coverImgUrl+'?param=120y120'}></img>
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
                        <div key={item.name} className='category-item' onClick={()=>{props.history.push({search:'?id='+item.id}) }}>
                            <div className='img-div'>
                                <img  alt='记载中' src={item.coverImgUrl}></img>
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