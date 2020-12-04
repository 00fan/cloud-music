import styled from 'styled-components'
import sprite_2 from '../../../../assets/img/sprite_02.png'
export const RecommendSwrapper=styled.div`
    .content{
        outline:1px solid #d3d3d3;
        height:1400px;
    }
    .content-left{
        width:730px;
        float:left;
        height:1400px;
        .g-wrap{
            padding:20px 20px 40px;
        }
    }
    .content-right{
        width:250px;
        height:1400px;
        float:right;
        border-left:1px #d3d3d3 solid;
        .login{
            height: 126px;
            padding-top: 0;
            background:url(${sprite_2}) no-repeat 0 999px;
            background-position:0 0;
            p{
                width: 205px;
                margin: 0 auto;
                padding: 16px 0;
                line-height: 22px;
                color: #666;
                font-size:12px;
            }
            a{  
                display: block;
                width: 100px;
                height: 31px;
                line-height: 31px;
                text-align: center;
                margin:0 auto;
                color: #fff;
                text-shadow: 0 1px 0 #8a060b;
                background:url(${sprite_2}) no-repeat 0 999px;
                background-position: 0 -195px;
                :hover{
                    background-position: -110px -195px;
                }
            }
        }
    }
`