import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Img from "./../../images/err.png"
export const Container  = styled.div`
    padding:5%;
    display:flex;
    justify-content:center;
    align-item:center;
    text-transform:capitalize;

`
export const Containerimg  = styled.div`
    background:url(${Img});
    background-size:cover;
    height:100vh;
    display: flex;
    justify-content:center;
    flex-flow:column;

`
export const Heading  = styled.h1`
    color: #fff;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;

`
export const Ancors = styled(NavLink)`
    text-decoration:none;
    color: #fff;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:200%;
`