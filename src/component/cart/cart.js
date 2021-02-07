import { connect } from "react-redux";
import React, { Component } from "react";
import axios  from "axios";
import Card from "./card.js";

import {GraidContainer,Pay,Total,TotalNumber,Empty} from "./../products/productsStyle";
import {reset,removefromcart} from "./../../store/actions";
class Cart extends Component {
  state = {
    product: [],
    empty:true
  };
  componentDidMount() {
      axios.get("./../../data.json").then((respons) => {
      let data = respons.data[0].products;
      this.setState({
        product: data,
      });

    });
  };

  sendOrder = ()=>{
    this.props.reset();
    alert("thanks")
  }
  
  render() {
    return (
    
       
        <div className="container-section" onChange={()=>console.log("changeed")}>
            <GraidContainer>
          {this.props.item.length == 0 ? 
          <Empty>  cart is empty now :D </Empty> :
          this.props.item.map((item,index) => ( <Card item={item} index={index} /> ))}
             </GraidContainer>
            <Total>total : <TotalNumber>{this.props.total}</TotalNumber></Total>
            <Pay onClick={this.sendOrder }> pay now </Pay>
         </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.cart,
    total: state.cart.reduce(
      (total, item) => parseInt(total) + parseInt(item.amount) * parseInt(item.product.price),0
    )
  };
}
function mapDispatchToProps(dispatch) {
    return {
        reset: () => dispatch(reset()),
        removefromcart:(index) => dispatch (removefromcart(index))
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
