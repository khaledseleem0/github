import Nav from './component/navbar/nav'; 
import Favicon from 'react-favicon';
import icon  from "./favicon.ico";
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './component/home/home';
import Product from './component/feature/product';
import { connect } from 'react-redux';
import { Component } from 'react';
import Cart from './component/cart/cart';
import Products from "./component/products/products";
import Signup from './component/signup/signup';
import Login from './component/login/sigin';
import Erorr from './component/erorr/erorr';
class App extends Component {
render(){
  return (
    <BrowserRouter>
       <div>
                   {/*  favicon */}
          <Favicon url={icon} />
                    {/* start CODE */}
          <Nav amount={this.props.amount}/>
          <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/sign_up" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/:erorr" component={Erorr}></Route>
          </Switch>
       </div>
       </BrowserRouter>
  );
}
}
function mapStateToProps(state){
  return {
     amount :state.cart.reduce((total,item)=>total + parseInt(item.amount),0)
  }
}

export default connect(mapStateToProps)(App);
