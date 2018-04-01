import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render () {
        return (
            <div>
            <nav className="fh5co-nav">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-2">
                        <div id="fh5co-logo"><Link to="/">Merch Link in bio.</Link></div>
                    </div>
                    <div className="col-md-6 col-xs-6 text-center menu-1">
                        <ul>
                            <li className="has-dropdown">
                                <Link to="/shop">Shop</Link>
                                <ul className="dropdown">
                                    <li><a href="single.html">Single Shop</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                                </li>
                            <li className="has-dropdown">
                                <Link to="/service">Services</Link>
                                <ul className="dropdown">
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">eCommerce</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">API</a></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                        <ul>
                            <li className="search">
                                <div className="input-group">
                                  <input type="text" placeholder="Search.." />
                                  <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button"><i className="icon-search"></i></button>
                                  </span>
                                </div>
                            </li>
                            <li className="shopping-cart"><a href="#" className="cart"><span><small>0</small><i className="icon-shopping-cart"></i></span></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
        </div>
        )
    }
}

export default Navbar