import sprite_cover from '../../../../../../assets/img/sprite_cover.png'
import sprite_2 from '../../../../../../assets/img/sprite_02.png'
import styled from 'styled-components'

export const NewDiscWrapper=styled.div`
    width:690px;
    position: relative;
    .swipper{
        width:100%;
        margin-top:10px;
        background:#f5f5f5;
        padding:0 22px;
        outline:1px #d3d3d3 solid;
        .carousel-page{
            margin:20px 0;
            width:100%;
            .carousel-page-item{
                position:relative;
                float:left;
                width: 118px;
                height: 150px;
                margin-left: 11px;
                /* background:url(${sprite_cover}) no-repeat; */
                ::after{
                    content:'';
                    position:absolute;
                    width: 118px;
                    height: 100px;
                    top:0;
                    background:url(${sprite_cover}) 0 -570px no-repeat;
                }

                a{  
                    display:block;
                    font-size:12px;
                    width:100px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    margin:0;
                    color:#000;
                    cursor: pointer;

                    :hover{
                        text-decoration:underline
                    }
                    :last-child{
                        color:#666;
                    }
                }

                img{
                    width:100px;
                    height:100px;
                }
            }
           
        }
    }

    .arrow-left{
        position:absolute;
        top: 50%;
        width: 17px;
        height: 17px;
        background:url(${sprite_2}) -260px -75px no-repeat;
        cursor: pointer;
    }
    .arrow-right{
        position:absolute;
        top: 50%;
        right:0;
        width: 17px;
        height: 17px;
        background:url(${sprite_2}) -300px -75px no-repeat;
        cursor:pointer;
    }
`