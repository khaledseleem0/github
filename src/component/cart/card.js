import React from "react";
import { connect } from "react-redux";
import {removefromcart,reset} from "./../../store/actions";
import {CardContainer,ProductText,Btn} from './cardStyle';
import {Img,ImgContainer} from './../feature/featureStyle';

 function Card(props){
    const {item,index} = props;
    const {product} = item;
    return (
            <CardContainer key={index}>
                <ImgContainer>
                <Img src={product.src} alt="" />
                </ImgContainer>
                <ProductText> name : {product.name}</ProductText>
                <ProductText> price : {product.price}$</ProductText>
                <ProductText> amount:{item.amount}</ProductText>
                
             <Btn className="btn btn-danger" onClick={()=>{
                 props.removefromcart(index)
                }}>
            <i className="fa fa-trash"></i> Remove
               </Btn>
            </CardContainer>
    );
}
function dispatchToProps(dispatch){
    return {
        removefromcart: (index) => dispatch(removefromcart(index)),
        reset:()=>dispatch(reset())
        
  }
  }
export default connect(null , dispatchToProps)(Card)

