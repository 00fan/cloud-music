import styled from 'styled-components'
import wrap3 from '../../../../assets/img/wrap3.png'
export const RankWrapper=styled.div`
    .content{
        height:2000px;
        background: url(${wrap3}) repeat-y center 0;
        border: 1px solid #d3d3d3;
        .left{
            float: left;
            width: 240px;
        }
        .right{
            height: 100%;
            float: right;
            width: 740px;
            padding-bottom: 50px;
        }
    }
    
`