import styled from 'styled-components'
export const CategoryWrapper=styled.div`
    font-size:12px;
    .yun{
        margin-top:20px;
        padding: 0 10px 12px 15px;
        font-size: 14px;
        color: #000;
        font-weight: bold;
    }
    .category-item{
        width:240px;
        height:62px;
        padding: 10px 0 10px 20px;
        cursor: pointer;

        
            .img-div{
                display:inline;
                float:left;
                width: 40px;
                height: 40px;
                img{
                    width:40px;
                    height:40px;
                }
            }   
            
            
            .name{
                line-height:14px;
                width: 180px;
                padding-left:10px;
                margin:0;
                overflow: hidden;
                 margin-top: 2px;
                 margin-bottom: 8px;
            }
            .up{
                padding-left:50px;
                width:170;
                height:16px;
                color:#999;

            }
        
    }
`