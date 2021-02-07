import React, { Component } from 'react'
import axios from 'axios';
import {ImgContainer,Container,Content,Input,Btn} from './productStyle'
import { connect } from 'react-redux'; 
import {addtocart} from './../../store/actions';
class Product extends Component {
        
        state = {
            product:[],
            loading:false,
            // products:[],
            amount:0
        }
        componentDidMount(){
            axios.get("./../../data.json").then((respons)=>{
                const resopnsState = respons.data[0].products;
                const trueRes = resopnsState.find(products => this.props.match.params.id ==  products.id)
 
                console.log(trueRes);
                this.setState({
                    product:trueRes,
                    loading:true
                })
            })
        }
        handleValue = (e)=>{
               let  value  = e.target.value ;
               console.log(value);
               this.setState({amount:value}) 

        }
    render() {
       return (
        this.state.loading == false ? "loadding..." :<div className="container-section">
              <Container>
              <ImgContainer>
                <img src={"./../"+this.state.product.src} alt={this.state.product.name} width="100%" height="100%" />
                </ImgContainer>
                <Content>
                <h3>
                    {this.state.product.name}
                </h3>
                <p>
                    {this.state.product.info}
                </p>
                <p>
                price :  {this.state.product.price} $
                </p>
                <p>
                total :  {(parseInt(this.state.amount) * this.state.product.price )}$
                </p>
                <Input type="number" onInput={this.handleValue}/>
                <Btn onClick={()=>{
                 this.props.addtocart(this.state.product, this.state.amount)}}>
                <i class="far fa-plus-square"></i>
                </Btn>
                </Content>

              </Container>
            </div>
        )
    }
}

function dispatchToProps(dispatch){
    return {
      addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
  }
  export default connect(null,dispatchToProps)(Product)