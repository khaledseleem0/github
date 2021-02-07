// import {truecheck ,falsecheck} from "./../component/signup/signupStyle";
export default function checker(){
    const pass = document.querySelectorAll('input')[3].value;
    const container = document.querySelectorAll('form')[0];
   if(pass ==='Admin'){
       container.style.animationName='falsecheck';
       container.style.boxShadow="rgb(237 44 73 / 24%) 0px 4px 15px 0px, rgb(255 0 0 / 39%) 0px 1px 12px 0px, rgb(237 44 73) 0px 2px 0px 0px inset"
   }else if(pass === 'User'){
    container.style.animationName='truecheck';
    container.style.boxShadow="rgb(12 255 63 / 34%) 0px 4px 15px 2px, rgb(28 228 42 / 63%) 0px 1px 2px 0px, rgb(84 237 44 / 50%) 0px 2px 0px 0px inset";

   }else{
    container.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 15px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(237, 44, 73, 0.5) 0px 2px 0px 0px inset";

   }
 }