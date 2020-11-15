import styled from 'styled-components'

import logo from '../../assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
    height:75px;
    background-color:#242424;
    border-bottom: 1px solid #000;
    .content{
        height:70px;
        display:flex;
    }


    .subnav{
        height:5px;
        background-color: #C20C0C;
    }
`
export const WrapperLeft = styled.div`
    .logo {
        float: left;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        background:url(${logo}) no-repeat;

        a{
            display:block;
            width:157px;
            height:100%;
            padding-right:20px;
        }
    }
    .selectLink{
        float:left;
        height:100%;
        display:flex;

        a{   
            font-size:14px;
            font-style: normal;
            display:block;
            height:70px;
            line-height:70px;
            color:#ccc;
            text-decoration:none;
            padding-left:20px;
            padding-right:20px;

            :hover{
                background-color:#000;
            }
        }
        .active{
            position: relative;
            background-color:#000;
            ::after{
                content:'';
                position:absolute;
                width:12px;
                height:7px;
                bottom:-1px;
                transform:translateX(-50%);
                left:50%;
                background:url(${logo}) no-repeat -226px 0;

                }
        }

        :last-child{
            position: relative;
            ::after{
                content:'';
                position: absolute;
                top: 21px;
                right: -20px;
                width: 28px;
                height: 19px;
                background:url(${logo});
                background-position: -190px 0;
            }
        }
    }
    

`
export const WrapperRight = styled.div`
    float:right;
    display:flex;
    justify-content:flex-end;
    .search{
        font-size:12px;
        height:32px;
        margin-top: 19px;
        margin-left:50px;
        width:158px;
        background-color: #fff;
        border-radius: 32px;
        overflow:hidden;
        transform:scale(0.9)
    }

    .cre-cen{
        margin: 22px 0 0 15px;
        font-size:12px;
        height:26px;
        color:#ccc;
    }

    .login{
        margin: 23px 0 0 25px;
        text-align:center;
        font-size:12px;
        border:0;
        color:#ccc;
    }

`