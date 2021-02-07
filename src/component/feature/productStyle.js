import styled from 'styled-components';

export const ImgContainer = styled.div`
    width:50%;
    float:left;
    @media screen and (max-width:700px){
        width:100%;
        float:none;   
    }

`
export const Container = styled.div`
clear: both;
box-shadow: 0px 0px 10px 10px rgba(196, 196, 196, 0.22);
overflow: hidden;
background:#fff;
`



export const Content = styled.div`
float:right;
width:50%;
padding:5%;
@media screen and (max-width:700px){
    width:100%;
    float:none;   
}

`

export const Input = styled.input`
padding:1%;
border:none;
border-bottom:1px solid royalblue;
outline:none;
margin:1% 0%;
width:70%;

`
export const Btn = styled.span`
& > i  {
    color: #fff;
background: royalblue;
padding: 10px 20px;
margin: 10px;
border-radius: 7px;
}
`