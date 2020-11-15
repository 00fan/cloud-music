import styled from 'styled-components'

import sprite_icon from '../../../../../../assets/img/sprite_icon.png'
export const HotRecommendSwrapper=styled.div`
    .hot-recommend{
        display:flex;
        width:731px;
        margin: 20px 0 0 -42px;
        height:468px;
        padding:0;
        flex-wrap:wrap;
        .recommend-item{
            list-style-type:none;
            /* flex:none; */
            width: 182px;
            height: 204px;
            padding-left: 42px;
            position: relative;
            img{
                width:140px;
                height:140px;
            }
            
            .a-hover {
                :hover{
                    text-decoration:underline;
                    color:#000;
                }
            }
            .icon-box{
                width:140px;
                height:28px;
                position:absolute;
                bottom:63px;
                background:rgba(0,0,0,0.5);

                .head-ser-icon{
                    display:block;
                    width: 14px;
                    height: 11px;
                    margin:10px 0px 0px 12px;
                    background:url(${sprite_icon}) 0 -24px no-repeat;
                }
                .play-count{
                    position:absolute;
                    bottom:3px;
                    font-size:12px;
                    left:30px;
                    color:#fff;
                }
                .play-icon{
                    display:block;
                    position: absolute;
                    right: 10px;
                    bottom: 5px;
                    width: 16px;
                    height: 17px;
                    background:url(${sprite_icon}) 0 0 no-repeat;
                }
            }
        }
    }

`