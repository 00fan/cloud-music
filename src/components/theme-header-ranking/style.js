import styled from 'styled-components'

import sprite_02 from '../../assets/img/sprite_02.png'
export const HeadersSwrapper=styled.div`
    width:100%;
    height: 33px;
    /* padding: 0 10px 0 34px;  */
    padding: 0 10px 0 0px; 
    font-size:12px;
    border-bottom: 2px solid #C10D0C;
    overflow:hidden;
    .header-left{
        float:left;
        display:flex;
        justify-content:left;
        .title{
            position:relative;
            font-size:14px;
            /* ::before{
                position:absolute;
                content:'';
                width:33px;
                height:33px;
                background:url(${sprite_02}) -225px -156px no-repeat;
                left:-33px;
            } */
        }

        .play-list{
            margin: 0 0 0 20px;
            line-height:40px;
            color:#666;

        }
    }

    .header-right{
        top:5px;
        float:right;
        height:33px;
        position: relative;
        color:#666;
        a{
            color:red;
            padding-left:5px;
            font-weight:bold;
        }
    }

    
`