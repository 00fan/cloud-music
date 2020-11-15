import styled from 'styled-components'


import sprite_footer_02 from '../../assets/img/sprite_footer_02.png'

import sprite_footer_01 from '../../assets/img/sprite_footer_01.png'
export const FooterWrapper = styled.div`
    display:flex;
    border-top:1px solid #ccc;
    .left{
        float: left;
        width: 520px;
        padding-top: 15px;
        line-height: 24px;
        font-size:12px;

        a{
            :hover{
                text-decoration:underline
            }
        }

        .policy{
            margin:0;
            display:flex;

            a{
                color: #999;
            }
            span{
                margin: 0 8px 0 10px;
                color: #c2c2c2;
            }
            
        }
        .copy{
            margin:0 12px 0;
            text-align:right;
            span:first-child{
                margin-right:14px;
            }
            a{
                color:black;
            }
        }
        .contact{
            margin:0;
            span:first-child{
                margin-right:14px;
            }
            a{
                color:black;
            }

        }
        .filing{
            margin:0 12px 0;
            text-align:right;
            
            a{
                color:black;
                margin-left:14px;
            }

            .police-logo{
                display:inline-block;
                margin-right: 2px;
                vertical-align: -2px;       
                width:14px;
                height:14px;
                background:url(${'https://s2.music.126.net/style/web2/img/3rd/police.png?88ee8b015e4417f66613b9c1892d4392'});
                background-size:cover;

            }
        }
    }

    .right{
        display:flex;
        justify-content:flex-end;
        float:right;
        width:420px;
        margin-top:33px;

        .linkItem{
            width: 50px;
            height: 100%;
            margin:0 10px;
            :nth-child(1){
                width:70px;
                margin:0 0 0 10px;
                a{  
                    display:block;
                    width:50px;
                    margin:0 auto;
                    background-position: -63px -456.5px;
                }
                span{
                    display:block;
                    width:70px;
                    margin:6px auto 6px;
                    background-position: 0 -108px;
                }
            }
            :nth-child(2){
                a{
                    background-position: -63px -101px;
                }    
                span{
                    background-position:-1px -91px;
                }
            }
            :nth-child(3){
                a{
                    background-position: 0px 0px;
                }
                span{
                    background-position: 0 0;
                }     
            }
            :nth-child(4){
                a{
                    background-position: -60px -50px;
                }
                span{
                    background-position: 0 -54px;
                }     
            }
            :nth-child(5){
                a{
                    background-position: 0 -101px;
                }
                span{
                    background-position: -1px -72px;
                }     
            }
            .showImg{
                display:block;
                width:100%;
                height: 45px;
                background:url(${sprite_footer_02}) no-repeat;
                background-size: 110px 552px;
            }
            .title{
                display:block;
                margin:6px 6px 0 0;
                width:50px;
                height: 14px;
                background:url(${sprite_footer_01}) no-repeat;
                background-size: 180px 139px
            }

            
        }
        
    }
`