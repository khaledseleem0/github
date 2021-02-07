import React, { Component} from 'react'
import Feature from '../feature/feature'
import Banner from './banner';
import {addtocart} from './../../store/actions';
import { connect } from 'react-redux'
import About from './about';
import Ad from './ad';
import Footer from './footer';
 class Home extends Component {
    render() {
        return (
            <div>
                <Banner/> 
                <Feature/> 
                <About/>
                <Ad/> 
                <Footer/>
          </div>
        )
    }
}

export default Home
