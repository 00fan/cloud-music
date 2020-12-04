import { memo } from 'react'
import {LoadingWrapper} from './style'
import {LoadingOutlined} from '@ant-design/icons'
function Loading(props){
    return (
        <LoadingWrapper show={props.show}>
            <LoadingOutlined />
            加载中
        </LoadingWrapper>
    )
}
export default memo(Loading)