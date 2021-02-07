import styled from "styled-components";
import Img from "./../../images/ad.jpg";
export const Container = styled.div`
clear: both;
background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Img}) ;
height:50vh;
background-size:cover;
background-attachment: fixed;
position:relative;
`
export const Content = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
    text-transform: capitalize;
`
export const Sponsers = styled.div`
display: flex;
justify-content: space-around;
    & > img{
        width:20%
    }
`