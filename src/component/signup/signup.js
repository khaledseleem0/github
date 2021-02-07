import React, { Component} from "react";
import {Pop} from "./../feature/featureStyle";
import {Form,Input,Send,Label,Login} from './signupStyle';
import  "./../../style.css";
const  Signup = ()=>{
    const checker = ()=>{
        const pass = document.querySelectorAll('input')[3].value;
        const container = document.querySelectorAll('form')[0];
       if(pass ==='Admin'){
           container.style.animationName='falsecheck';
           container.style.boxShadow="rgb(237 44 73 / 24%) 0px 4px 15px 0px, rgb(255 0 0 / 39%) 0px 1px 12px 0px, rgb(237 44 73) 0px 2px 0px 0px inset"
       }else if(pass === 'User'){
        container.style.animationName='truecheck';
        container.style.boxShadow="rgb(12 255 63 / 34%) 0px 4px 15px 2px, rgb(28 228 42 / 63%) 0px 1px 2px 0px, rgb(84 237 44 / 50%) 0px 2px 0px 0px inset";
    
       }else{
        container.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 15px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px";
       }
     }
    return(
        <div className='container-section'>
                <Pop>
                 <h3>join to us now  &#10084;</h3>
                 <span signup></span>
                </Pop>
        <Form action="">
        <Label htmlFor="">
         your first name 
        </Label>
        <Input type="text"/>
        <span></span>

  <Label htmlFor="">
      your last name 
  </Label>
        <Input type="text"/>
        <span></span>

  <Label htmlFor="">
      your email name 
  </Label>
  <Input type="email"/>
  <span></span>

  <Label htmlFor="">
        type your password 
  </Label>
  <Input type="password" onInput={()=>checker()}/>
  <span></span>

  <Label htmlFor="">
      confirm your password 
  </Label>
        <Input type="password"/>
        <span></span>
        <Send type='submit' value="sigin now"/>
        <Login to="/login">have account ?</Login>
        </Form>
        </div>
    )
  
}
export default Signup;
