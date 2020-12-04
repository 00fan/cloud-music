import styled from 'styled-components'
import button from '../../../../../../assets/img/button2.png'
import icon from '../../../../../../assets/img/icon.png'
import table from '../../../../../../assets/img/table.png'
export const DetailWrapper=styled.div`
    .top{
        padding:40px;
        width:740px;
        height:248px;
        .img-div{
            float:left;
            margin-right:20px;
            img{
                width:150px;
                height:150px;
            }
        }
        .title{
            margin-top:10px;
        }
        .update-time{
            position: relative;
            padding-left:20px;
            h2{
                font-size:12px;
            }
            margin-bottom:30px;
            ::before{
                content:'';
                position:absolute;
                left:0px;
                top:2px;
                width:14px;
                height:14px;
                background:url(${icon}) -18px -682px no-repeat;
            }
            
        }
        .text-box{
            font-size:12px;
            float:right;
            width:480px;
            height:31px;
            .play{
                position:relative;
                cursor: pointer;
                display:inline-block;
                width:90px;
                line-height:31px;
                height:31px;
                padding-left:35px;
                padding-right:30px;
                margin-right:20px;
                background:url(${button}) 0 -805px no-repeat;
                ::after{
                    content:'';
                    position:absolute;
                    right:-15px;  
                    width:40px;
                    height:31px;
                    background:url(${button}) 0 -1588px no-repeat;
                }
            }

            .subscribed{
                cursor: pointer;
                display:inline-block;
                line-height:31px;
                height:31px;
                padding-left:30px;
                padding-right:8px;
                margin-right:20px;
                background:url(${button}) 0 -977px no-repeat;

                ::after{
                    content:'';
                    position:absolute;
                    width:8px;
                    height:31px;
                    background:url(${button}) right -1020px no-repeat;
                }
            }
            .share{
                cursor: pointer;
                position:relative;
                display:inline-block;
                line-height:31px;
                height:31px;
                padding-left:30px;
                padding-right:5px;
                margin-right:20px;
                background:url(${button}) 0 -1225px no-repeat;
                ::after{
                    content:'';
                    position:absolute;
                    width:8px;
                    height:31px;
                    background:url(${button}) right -1020px no-repeat;
                }
            }
            .download{
                cursor: pointer;
                position:relative;
                display:inline-block;
                width:60px;
                line-height:31px;
                height:31px;
                padding-left:30px;
                margin-right:20px;
                background:url(${button}) 0 -2761px no-repeat;
                ::after{
                    content:'';
                    position:absolute;
                    width:8px;
                    height:31px;
                    background:url(${button}) right -1020px no-repeat;
                }
            }
            .comment{
                cursor: pointer;
                position:relative;
                display:inline-block;   
                line-height:31px;
                height:31px;
                padding-left:30px;
                padding-right:15px;
                background:url(${button}) 0 -1465px no-repeat;
                ::after{
                    content:'';
                    position:absolute;
                    width:15px;
                    height:31px;
                    background:url(${button}) right -1020px no-repeat;
                }
            }

        }
    }
    .content-wrapper{
        padding:0 40px;
        width:740px;

        .song-title{
            width:100%;
            height:38px;
            display:flex;
            text-align:left;
            background:url(${table});
            .place-holder{
                width:77.6px;
            }
            .title{
                width:327.2px;
                padding:8px 10px;
                background:url(${table}) 0 -56px no-repeat;
            }
            .time{
                position: relative;
                width:90.4px;
                padding:8px 10px;
                background:url(${table}) 0 -56px no-repeat;
                
            }
            .singer{
                width:173.6px;
                padding:8px 10px;
                background:url(${table}) 0 -56px no-repeat;
            }
        }

        .track{
            //前三个item加图片
            .track-item{
                :nth-child(odd){
                    background:#f7f7f7;
                }
                :nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4){
                    height:69.2px;
                    .item-index{
                        margin:20px 0;
                    }
                    .item-name{
                        height:100%;
                        position: relative;
                        .img-box{
                            width:50px;
                            height:50px;
                            position: absolute;
                            top:10px;
                            left:10px;

                            img{

                                width:50px;
                                height:50px;
                                margin-right:10px;
                            }
                        }
                        
                        .play-icon{
                            margin:20px 0; 
                            position: absolute;
                            left:70px;
                        }
                        a{  
                            position: absolute;
                            display:inline-block;
                            margin:20px 0; 
                            left:90px;
                        }
                    }
                    .item-time{
                        margin:20px 0;
                    }
                    .item-ar{
                        margin:20px 0;
                    }
                    
                }
            }

            a{
                :hover{
                    text-decoration:underline;
                }
            }
            .track-item{
                width:100%;
                display:flex;
                justify-content:space-between;
                
                .item-index{
                    width:77.6px;
                    height:29.29px;
                    padding:6px 10px;
                    position: relative;
                    line-height:17px;
                    .index-icon{
                        width:17px;
                        height:17px;
                        display:inline-block;
                        position:absolute;
                        left:40px;
                        background:url(${icon}) -67px -283px no-repeat;
                    }
                }
                .item-name{
                    width:327.2px;
                    height:29.2px;
                    padding:6px 10px;
                    font-size:12px;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    overflow:hidden;
                    
                    .play-icon{
                        cursor: pointer;
                        display:inline-block;
                        width:17px;
                        height:17px;
                        margin-right:8px;
                        background:url(${table}) 0 -103px no-repeat;
                        :hover{
                            background:url(${table}) 0 -128px no-repeat;
                        }
                    }
                }
                :hover{
                    .item-time{
                        .time{
                            display:none
                        }
                        .time-icon{
                            display:inline-block;
                        }
                        
                    }
                }
                .item-time{
                    width:90.4px;
                    height:29.6px;
                    padding:6px 10px;
                    position: relative;
                    
                    .time-icon{
                        display:none;
                        /* display:inline-block; */
                        padding-left:10px;
                        position:absolute;
                        width:100%;
                        height:14px;
                        left:0;   
                        
                            a{
                                display:inline-block;
                                width:16px;
                                height:18px;
                                background:url(${icon}) 0 -700px no-repeat;
                                :nth-child(1){
                                    margin:0 -3px 0 0;
                                    :hover{
                                        background-position:-22px -700px;
                                    }
                                }
                                :nth-child(2){
                                    background:url(${table}) 0 -174px no-repeat;
                                    :hover{
                                        background-position: -20px -174px;
                                    }
                                }
                                :nth-child(3){
                                    background:url(${table}) 0 -195px no-repeat;
                                    :hover{
                                        background-position: -20px -195px;
                                    }
                                }
                                :nth-child(4){
                                    background:url(${table}) -81px -174px no-repeat;
                                    :hover{
                                        background-position: -104px -174px;
                                    }
                                }
                        }
                    }
                }
                .item-ar{
                    
                    width:173.6px;
                    height:29.6px;
                    line-height:17.6px;
                    padding:6px 10px;
                    text-align:left;
                    font-size:12px;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    overflow:hidden;
                }
            }
        }



        
    }

` 