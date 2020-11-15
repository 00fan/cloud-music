import styled from 'styled-components'

import sprite_02 from '../../assets/img/sprite_02.png'
export const HeadersSwrapper=styled.div`
    width:100%;
    height: 33px;
    padding: 0 10px 0 34px; 
    font-size:12px;
    border-bottom: 2px solid #C10D0C;
    .header-left{
        float:left;
        display:flex;
        justify-content:left;
        .title{
            position:relative;
            ::before{
                position:absolute;
                content:'';
                width:33px;
                height:33px;
                background:url(${sprite_02}) -225px -156px no-repeat;
                left:-33px;
            }
        }

        .play-list{
            display:flex;
            justify-content:space-around;
            align-items:center;
            margin: 0 0 0 20px;

            span{
                margin: 0 10px;
                color: #ccc;
            }

            .play-item{
                &:last-child{
                    span{
                        display:none
                    }
                }
            }
        }
    }

    .header-right{
        float:right;
        height:33px;
        position: relative;
        a{
            display:block;
            padding:10px;
        }
        &::after{
            position:absolute;
            content:'';
            top:12px;
            width:12px;
            height:12px;
            right:-6px;
            background:url(${sprite_02}) 0 -240px no-repeat;
        }
    }

    
`