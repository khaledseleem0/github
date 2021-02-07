import React, { Component } from 'react';
import './nav.css';
import {BrowserRouter, NavLink} from "react-router-dom";
let i =0;
class Nav  extends Component {
    toggleNav = ()=>{

        i=i+1;
       let  navBar =  document.querySelector('.nav');
       let burger = document.querySelectorAll('.burger span');
       let links = document.querySelectorAll('.nav a');
    //  open nav       
        links[3].style.anmationName = "mymove";
       
       if(i%2 === 0){
        navBar.style.transform='translateX(100%)';
            burger.forEach((hum,ind)=>{
                ind ===1 ?hum.style.opacity=1:console.log(1); ;
                hum.style.transform = `translateY(0px) rotate(0deg)`;
                for (let i = 0; i < links.length; i++) {
                    const link = links[i];
                    link.style.animationName = "null" ;
                    
                } 
            })
                //  close nav 

       }else{
        burger.forEach((hum,ind)=>{
            navBar.style.transform='translateX(0%)';
            ind ===1 ?hum.style.opacity=0:console.log(1); 
            ind ===0 ?hum.style.transform= `translateY(10px) rotate(-45deg)` :console.log(1); ;
            ind ===2 ?hum.style.transform= `translateY(-5px) rotate(45deg)` :console.log(1); ;
            for (let i = 0; i < links.length; i++) {
                const link = links[i];
                link.style.animationName = "mymove";
            }
        })
       }

        }
    render(){
        return(
        <header>
<div>
<div className='burger' onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
            </div>
</div>

            <h1 className='logo'>
                loop studios
            </h1>
            <div className='nav'>
            <h1 className='logo2'>
                loop studios
            </h1>
           <BrowserRouter>
            <router>
            <NavLink  exact to='/'>home</NavLink>              
              <NavLink to='/product'>prouduct</NavLink>        
              <NavLink to='/erorr'>support</NavLink> 
              <NavLink to='/sigin'>login</NavLink>        
              <NavLink to='/signup'>signup</NavLink>       
            </router>
           </BrowserRouter>
 
            </div>
        </header>

        )
    }
}
export default Nav;


// click{}
window.onload = function(){
    let header  = document.querySelector('header');
    window.addEventListener("scroll",()=>{
        header.style.position = "fixed";
        document.body.style.paddingTop = (document.querySelector('header').clientHeight )+ 'px';

    })
}