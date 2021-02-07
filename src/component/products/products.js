import axios from 'axios';
import {addtocart} from './../../store/actions';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {GraidContainer} from './productsStyle'
import {Img,Clear,Pop,Card,ImgContainer,ProductName,Price,CardContainer,Navigation} from './../feature/featureStyle';
class Products extends Component {
    state = {
        products:[],
        product:[],
        amount:0,
      }
      componentDidMount(){
          axios.get("./../../data.json").then((respond)=>{
              this.setState({
                products:respond.data[0].products

              })
              })
      }
  
    render() {
        let amount = 0;
        const productsState  = this.state.products;
        console.log(this.state.product);
        const productsRender = productsState.map((card)=>{
            return (
             <CardContainer>
               <Card>
               <ImgContainer>
               <Img src={card.src} alt="" />
               <Navigation>
                 <Link to={"product/"+ card.id}>
                 <i class="fas fa-question"></i>
                 </Link>
               </Navigation>
               </ImgContainer>
               <ProductName>{card.name} </ProductName>
               <Price>{card.price}$ </Price>
               <Clear></Clear>
                     </Card>
                     
                    </CardContainer>
            )

        })
        return (
            <div className="container-section">
                <GraidContainer>
                {productsRender}
                </GraidContainer>
            </div>
        )
    }
}
function dispatchToProps(dispatch){
    return {
      addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
  }
  export default connect(null,dispatchToProps)(Products)