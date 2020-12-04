import styled from 'styled-components'
import topIcon from '../../assets/img/download-icon.png'
export const ToTopWrapper=styled.div.attrs((props)=>{})`
    .back-top{
        cursor: pointer;
        background:url(${topIcon}) no-repeat 0 999px;
        background-position: -265px -47px;
        width: 49px;
        height: 44px;
        :hover{
            background-position: -325px -47px;
        }
    }
`