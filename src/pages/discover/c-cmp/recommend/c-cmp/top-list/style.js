import styled from 'styled-components'
import sprite_02 from '../../../../../../assets/img/sprite_02.png'
import recommend_top_bg from '../../../../../../assets/img/recommend-top-bg.png'
import icon from '../../../../../../assets/img/icon.png'
export const TopListWrapper=styled.div`
    margin-top:30px;
    .top-list{
        height: 472px;
        margin-top: 20px;
        display:flex;
        .top-list-item{
            width: 230px;
            background:url(${recommend_top_bg});
            .header{
                height: 100px;
                padding: 20px 0 0 19px;
                .img-link{
                    float:left;
                    width:80px;
                    height:80px;
                    img{
                        width:80px;
                        height:80px;
                    }
                }
                .title{
                    float:left;
                    width:120px;
                    padding:10px 0 0 10px;
                    font-size:14px;

                    .icon-play{
                        display:inline-block;
                        width:22px;
                        height:22px;
                        margin:0 10px 0 10px;
                        background:url(${sprite_02}) no-repeat;
                        background-position: -267px -205px;
                        :hover{
                            background-position: -267px -235px;
                        }
                    }
                    .icon-subscribed{
                        display:inline-block;
                        
                        width:22px;
                        height:22px;
                        background:url(${sprite_02}) no-repeat;
                        background-position: -300px -205px;
                        :hover{
                            background-position: -300px -235px;
                        }
                    }
                }
                
            }
            .track{
                margin-top:20px;
                
                    .track-item{
                        height:32px;
                        position: relative;
                        span{
                            display:inline-block;
                            width:35px;
                            height:32px;
                            line-height:32px;
                            text-align:center;
                            vertical-align:top;

                        }
                        .a-to-ranking{
                            width:180px;
                            height:32px;
                            line-height:32px;
                            font-size:12px;
                            display:inline-block;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                            overflow:hidden;
                        }
                        :hover{
                            .play-icon{
                                display:block;
                            }
                            .a-to-ranking{
                                width:80px;
                            }
                        }
                        .play-icon{
                            display:none;
                            padding-left:10px;
                            position:absolute;
                            width:100px;
                        height:14px;
                        right:0;  
                        top:10px; 
                        
                            a{
                                display:inline-block;
                                width:18px;
                                height:18px;
                                margin:0 5px;
                                :nth-child(1){
                                    
                                    background:url(${sprite_02}) -267px -268px no-repeat;
                                    :hover{
                                        background-position: -267px -288px;
                                    }
                                }
                                :nth-child(2){
                                    background:url(${icon}) 0 -700px no-repeat;
                                    :hover{
                                        background-position: -22px -700px;
                                    }
                                }
                                :nth-child(3){
                                    background:url(${sprite_02}) -297px -268px no-repeat;
                                    :hover{
                                        background-position: -297px -288px;
                                    }
                                }
                            }
                        }
                    }
                .more{
                    display:inline-block;
                    width:100%;
                    height:32px;
                    font-size:14px;
                    line-height:32px;
                    text-align:right;
                }
            }
        }
    }
`