import styled from 'styled-components'

import down from '../../../../../../assets/img/download.png'
import arrow from '../../../../../../assets/img/banner_sprite.png'
export const TopBannersWrapper = styled.div`
    width:100%;
    height:285px;
   
    background:url(${props => (props.bgImg)});
    background-size: 6000px;
    background-position: center center;
    .banner{
        height:285px;
        display:flex;
        position:relative;
        .arrowLeft{
            display: block;
            position: absolute;
            left: -68px;
            top: 50%;
            margin-top: -31px;
            width: 37px;
            height: 63px;
            text-indent: -9999px;
            background:url(${arrow})  0 -360px;
            cursor: pointer;
        }
        .arrowRight{
            display: block;
            position: absolute;
            right: -68px;
            top: 50%;
            margin-top: -31px;
            width: 37px;
            height: 63px;
            text-indent: -9999px;
            background:url(${arrow}) 0 -508px;
            cursor: pointer;
            
        }

    }

    
`

export const BannerLeft = styled.div`
    width:730px;
    height:285px;

    .carousel{
        height:285px;
    }

    .banner-item{
        width:100%;
        height:285px;

        a{
            width:100%;
            height:100%;

            img{
                width:100%;
                height:100%;
            }
        }
    }
    

`

export const BannerRight = styled.div`
    position:relative;
    width:254px;
    height:285px;
    background:url(${down});
    
    .shadow{
        position:absolute;
        left:18px;
        right:15px;
        height:56px;
        bottom:44px;
        cursor: pointer;
            &:hover{
                background-color: rgba(0, 0, 0, 0.2);
            }
    }
    
    p{
        position:absolute;
        height:12px;
        line-height:12px;
        font-size:12px;
        bottom:0;
        left:0;
        right:0;
        margin: 10px 0;
        text-align: center;
        color: #8d8d8d;
    }

    

`