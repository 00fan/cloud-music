import styled from 'styled-components'

export const RecommendSwrapper=styled.div`
    .content{
        outline:1px #000 solid;
        height:1000px;
    }
    .content-left{
        width:730px;
        float:left;
        height:1000px;
        .g-wrap{
            padding:20px 20px 40px;
        }
    }
    .content-right{
        width:250px;
        height:1000px;
        float:right;
        border-left:1px #000 solid;
    }
`