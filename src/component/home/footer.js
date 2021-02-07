import React from "react";
import {Link} from 'react-router-dom';
import {FooterContainer,Shopping,CopyWrite} from './footerStyle'
export default function  Footer() {
    const links = [
        "help","products","info","contacts","develops","lifestyle"        
    ]
        return(
            <>
                <FooterContainer>
                    <Shopping> shopping.com 
                    <i class="fas fa-tags"></i>
                    </Shopping>
                <ul>
                    {links.map((link)=> <li> <Link to="/:page"> {link} </Link></li> )}
                </ul>
                </FooterContainer>
                <CopyWrite>
                    designed by <i class="fas fa-heart"></i>  {"khaled Seleem"} 
                </CopyWrite>
        </>
   )
}