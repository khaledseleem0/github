import styled from "styled-components";
export const Pop  = styled.div`
        text-align:center;
        & > span{
            height:5px;
            width:15px;
            display:inline-block;
            background:${props => props.children[1].props.feature ? "#f5d782" :props.children[1].props.signup ?  "palevioletred" : "#00af91"  };
        }
       
`
export const Card  = styled.div`
background:#fff;
padding:1%;
margin:1%;
`
export const ImgContainer  = styled.div`
            position:relative;
            transition:0.4s;
            &:hover > div{
                opacity:1;
        }
`
export const ProductName  = styled.span`
            background:#f8dc81;
            float:right;
            padding:1% 5% ;
            border-radius:10px;
            margin:2%;
`
export const Price  = styled.span`
background:#f8dc81;
float:left;
padding:1% 5%;
border-radius:10px;
margin:2%;

`
export const CardContainer = styled.div`
padding:1%;
background:#d3e0dc5e;

`
export const Clear = styled.div`
clear:both;

`

export const Navigation  =styled.div `
background: transparent;
display: block;
position: absolute;
left: 0%;
bottom: 0%;
right: 0px;
top: 0px;
width: 100%;
z-index: 3;
padding: 5%;
clear: both;
display: flex;
align-items: end;
background:linear-gradient(to top,rgba(248, 220, 129, 0.82),rgba(0,0,0,0));
justify-content: space-between;
opacity:0;
transition:0.5s;
overflow:hidden;
a,span{
    background:#fff;
    border-radius:50%;
    color:#222222;
    padding:3px 10px;
    display:inline-block;
    transition:0.4s;
    &:hover{
         transform: translate(0%,0%);
         background: #fd094d;
         color: #fff;
         cursor: pointer;
    }

}
& > a{
    float:right;
    transform:translate(-70%,70%);

}
& > span{
    float:left;
    transform:translate(70%,70%)
}
`
export const Img = styled.img`
width:100%;
height:100%;


`