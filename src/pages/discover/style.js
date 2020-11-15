import styled from  'styled-components'

import white_r_icon from '../../assets/img/white-r-icon@3x.png'
export const DiscoverWrapper=styled.div`
    .top-backgound{
        width:100%;
        background-color:#C20C0C;
        height:34px;

        .menu-cen{
            height:100%;

            .menu{
                height:100%;
                width:50%;
                margin-left:180px;
                display:flex;
                justify-content:space-around;
                
                .menu-item{
                    :nth-child(3){
                        position: relative;
                        ::after{
                            content:'';
                            position:absolute;
                            top:0;
                            right:2px;
                            width:12px;
                            height:12px;
                            background:url(${white_r_icon});
                        }
                    } 
                } 

                .menu-item{
                    line-height:18px;
                    font-size:12px;
                    height:18px;
                    color:#FFF;
                    border-radius:20px;
                    margin-top:5px;
                    padding:0 15px;

                    :hover{
                        background:#9B0909;
                    }
                    
                }
                .active{
                    background:#9B0909;
                }
            }
        }
    }

`