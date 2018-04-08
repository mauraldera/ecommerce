import React, { Component } from 'react'
import { connect } from 'react-redux'

import currencyFormatter from 'currency-formatter'
import { addToCart } from '../actions'

var dummy = [
  {
    name: 'Chair',
    price: 120000,
    image: 'https://www.redcandy.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/y/lyon-concrete-hauteville-chair-plywood-legs.1508685459.jpg',
    category: 'kaos',
  },
  {
    name: 'Supreme Shirt',
    price: 10000,
    image: 'https://i.ebayimg.com/images/g/eBUAAOSwe51Z~2D-/s-l300.png',
    category: 'kaos',
  },
  {
    name: 'Lidi',
    price: 120000,
    image: 'https://www.sintaisoon.com/wp-content/uploads/2016/09/80057300.png',
    category: 'laptop'
  },
  {
    name: 'Makanan Enak',
    price: 120000,
    image: 'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/ce/Bleach_png.png/revision/latest?cb=20170313224049',
    category: 'bukan lagi'
  },
  
]

class Item extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <div className="tab3">
      {dummy.map((item, index)=>
      (item.category.includes(this.props.input))
      ? <div class="row">
      <div className="col-md-4 text-center animate-box">
          <div className="product">
              <img src={item.image} className="product-grid" />
                  <div class="inner">
                      <p>
                          <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                          <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                      </p>
                  </div>
              </div>
              <div className="desc">
                  <h3><a href="single.html"/>{item.name}</h3>
                  <span className="price">{currencyFormatter.format(item.price, { code: 'IDR' })}</span>
              </div>
          </div>
    //   </div>
      : null
      )}
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart, item) => dispatch(addToCart(cart, item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)