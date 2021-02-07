import React, { Component } from "react";
import Slider from "react-slick";
import { Img, Clear, Pop, Card, ImgContainer, ProductName, Price, CardContainer, Navigation } from './featureStyle';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addtocart } from './../../store/actions';
class Feature extends Component {
  state = {
    card: [],
    product: [],
    amount: 0,
  }
  componentDidMount() {
    axios.get("./../../data.json").then((respond) => {
      this.setState({
        card: respond.data[0].cards
      })
    })
  }

  render() {
    let amount = 0;
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    const lg = window.innerWidth;

    switch (true) {
      case lg >= 700:
        settings.slidesToShow = 3;
        break;
      case 700 > lg > 300:
        settings.slidesToShow = 2;
        break;
      case lg <= 400:
        settings.slidesToShow = 1;

        break;
      default: settings.slidesToShow = 2;
        break;
    }
    const cardState = this.state.card;
    const cardRender = cardState.map((card) => {
      return (
        <CardContainer>
          <Card>
            <ImgContainer>
              <Img src={card.src} alt="" />
              <Navigation>
                <Link to={"product/" + card.id}>
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
        <Pop>
          <h3>features products </h3>
          <span feature></span>
        </Pop>
        <Slider {...settings}>
          {cardRender}
        </Slider>
      </div>
    );
  }

}
function dispatchToProps(dispatch) {
  return {
    addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
}
export default connect(null, dispatchToProps)(Feature)