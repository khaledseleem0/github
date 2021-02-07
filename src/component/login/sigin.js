import React from 'react';
import { Pop } from '../feature/featureStyle';
import { Form, Input, Label, Send,SignupLink } from '../signup/signupStyle';
const  Login =()=> {
       const checker = ()=>{
                const pass = document.querySelectorAll('input')[2].value;
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
                <h3>Welcome back &#10084;</h3>
                <span login></span>
                </Pop>
                <Form theme="login">
                <Label htmlFor="" theme="login">
                user name                         
                </Label>
                <Input theme="login" type="text" name="username" id="username" placeholder="joen doe " theme="login"/>
                <span></span>
                <Label htmlFor="">
                E-mail                        
                </Label>
                <Input theme="login" type="email" name="email" id="email" placeholder="joendoe@gmail.com "/>
                <span></span>
                <Label htmlFor="">
                user password                         
                </Label>
                <Input theme="login" type="password" name="password" id="password" placeholder="****** " onInput={()=>checker()}/>
                <span></span>
                     <Send type="submit" theme="login"/> register now
                     <SignupLink to="/signup"  theme="login">don't have account ?</SignupLink>

                </Form>
                </div>
        )
    
}
export default Login;