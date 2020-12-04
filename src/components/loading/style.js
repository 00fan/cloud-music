import styled from 'styled-components'
export const LoadingWrapper=styled.div.attrs({
    // isshow:props=>props.show?'bolck':'none'
})`
    display:${props=>{return props.show?'block':'none'}};
    width:100%;
    text-align:center;
` 