import styled,{keyframes} from 'styled-components';
import {Link} from "react-router-dom";

export const Form = styled.form`
text-transform:capitalize;
animation:null .1s 5 linear;
overflow:hidden;
width: 70%;
margin:5% auto;
background:#fff;
padding:5%;
display: flex;
flex-flow: column;
box-shadow:${props => props.theme == "login" ? 
"rgba(0,0,0,0.1) 0px 4px 15px 0px,rgba(0,0,0,0.1) 0px 1px 2px 0px,rgba(44, 219, 237, 0.5) 0px 2px 0px 0px inset":
"rgba(0, 0, 0, 0.1) 0px 4px 15px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(237, 44, 73, 0.5) 0px 2px 0px 0px inset"};
` 
export const Input = styled.input`
display:block;
border: none;
padding: 10px;
margin: 10px 5px;
outline:none;
background:${props => props.theme == "login" ? "#a3fff21f" :"#ffa3a31f "};
& + span{  
     margin: 10px;
     transition:all .3s ease-in-out;
     content: "";
     ${(props)=>console.log(props)}
     background: ${props => props.theme == "login" ? "#00af91" :"#ec5b5b"};
     height: 2px;
     width: 100%;
     opacity:0;
     transform: translateX(100%);
     transition:.4s;

}

&:focus + span{
        transform:translateX(0%);
        opacity:1;
        margin: 10px auto;

}
`
export const Send  = styled.input`

padding: 10px;
transition:all .4s ease-in-out;
cursor:pointer;
background: #fff;
outline: none;
text-transform: capitalize;
border-radius: 5px;
border: 1px solid ${props => props.theme == "login" ? "#00af91" :"#ec5b5b"};
color: ${props => props.theme == "login" ? "#00af91" :"#ec5b5b"};
&:hover{
border-color:#fff;
color:#fff;
background: ${props => props.theme == "login" ? "#00af91" :"#ec5b5b"};
}

`
export const Login = styled(Link)`
        text-decoration: none;
        margin: 10px 0px;
        color:#ec5b5b

`
export const SignupLink = styled(Login)`   
color:#00af91;
`
export const Label = styled.label`
position:relative;
transition:all .1s ease-in-out;
             

`
