import {ToTopWrapper} from './style'
import {memo} from 'react'
import { BackTop } from 'antd';
function ToTop(){
    return(
        <ToTopWrapper>
            <BackTop>
                <div className='back-top'></div>
            </BackTop>
        </ToTopWrapper>
    )
}
export default memo(ToTop)