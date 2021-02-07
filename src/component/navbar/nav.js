import React from 'react';
import LogoIcon from './../../images/logo.png';
import {NavLink ,BrowserRouter} from 'react-router-dom';
import {Logo,Navbar,Header,Ul,Li,Burger,IconNav} from "./navStyle";
function Nav(props){
    let i = 0;
   const  handelBurger = ()=>{
    const burger_childern = document.querySelectorAll(".burger span");
    const navbar = document.querySelector(".navbar");
    if(i%2 === 0 ){
        burger_childern[0].style.transform ="rotate(45deg) translate(8px,5px)";
        burger_childern[2].style.transform ="rotate(-45deg) translate(8px,-3px)";
        burger_childern[1].style.opacity = "0";
        navbar.style.clipPath = "circle(100%)";
    }else{
        burger_childern[0].style.transform ="";
        burger_childern[2].style.transform ="";
        burger_childern[1].style.opacity = "1";
        navbar.style.clipPath = "circle(0%)";

    }
    i = i+1 ;
    }
        return(
            <>
            <Header>
                {/* logo  */}
                   <Logo>
                   <NavLink to="/" exact> 
                   <img src={LogoIcon} alt="shop"/>
                   </NavLink>
                   </Logo>
                   {/* navbar items */}
                   <Burger onClick={()=>handelBurger()} className="burger">
                   <span></span>
                   <span></span>
                   <span></span>
                   </Burger>
                   <Navbar className="navbar">
                       <Ul>
                           <Li>
                           <IconNav className="fas fa-store-alt"></IconNav>
                             <NavLink to="/" exact>home</NavLink>
                           </Li>
                           <Li>
                                  <IconNav className="fas fa-gifts"></IconNav>
                                 <NavLink to="/products" exact>Products</NavLink>
                           </Li>
                           <Li>
                                 <IconNav className="fas fa-shopping-basket"></IconNav>
                                 <NavLink to="/cart" exact>cart</NavLink>
                                 <span>({props.amount}) </span>
                           </Li>
                           <Li>
                                 <IconNav className="fas fa-sign-in-alt"></IconNav>
                                 <NavLink to="/login" exact>login</NavLink>
                           </Li>
                           <Li>
                                 <IconNav className="fas fa-address-book"></IconNav>
                                 <NavLink to="/sign_up" exact>sign up</NavLink>
                           </Li>
                       </Ul>
                   </Navbar>
               </Header>
               

            </>
        )
}

export default Nav ; 