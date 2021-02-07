import styled from "styled-components"
export const CardContainer  = styled.div`
background:#fff;
width:30vw;
padding:2%;
box-shadow :0 10px 40px -10px #c5def982;

`
export const ProductText  = styled.div`
padding:2px;


`
export const Btn  = styled.button`
margin: 2px auto;
background: transparent;
border: 1px solid  #ffc75f;
display: block;
border-radius: 5px;
width: 50%;
padding: 2%;
color:  #ffc75f;
position:relative;
overflow:hidden;
z-index: 0;
&:after{
content: "";
position: absolute;
top: 0px;
right: 0px;
left: 0px;
bottom: 0px;
background: #ffc75f;
transition: 0.9s;
clip-path:circle(0%);
z-index: -1;
}
&:hover:after{
    clip-path:circle(100%);

}&:hover{
    color:#fff
}
`