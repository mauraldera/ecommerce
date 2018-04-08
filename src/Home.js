import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './component/Item'



class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }
  render() {
    return (
      <div>
      {/* <div className="fh5co-loader"></div> */}
	
	<div id="page">
	
	
	{/* <aside id="fh5co-hero" className="js-fullheight">
		<div className="flexslider js-fullheight">
			<ul className="slides">
		   	<li>
		   		<div className="overlay-gradient"></div>
		   		<div className="container">
		   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
		   				<div className="slider-text-inner">
		   					<div className="desc">
		   						<span className="price">$800</span>
		   						<h2>Alato Cabinet</h2>
		   						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
			   					<p><a href="single.html" className="btn btn-primary btn-outline btn-lg">Purchase Now</a></p>
		   					</div>
		   				</div>
		   			</div>
		   		</div>
		   	</li>
		   	<li>
		   		<div className="container">
		   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
		   				<div className="slider-text-inner">
		   					<div className="desc">
		   						<span className="price">$530</span>
		   						<h2>The Haluz Rocking Chair</h2>
		   						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
			   					<p><a href="single.html" className="btn btn-primary btn-outline btn-lg">Purchase Now</a></p>
		   					</div>
		   				</div>
		   			</div>
		   		</div>
		   	</li>
		   	<li>
		   		<div className="container">
		   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
		   				<div className="slider-text-inner">
		   					<div className="desc">
		   						<span className="price">$750</span>
		   						<h2>Alato Cabinet</h2>
		   						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
			   					<p><a href="single.html" className="btn btn-primary btn-outline btn-lg">Purchase Now</a></p>
		   					</div>
		   				</div>5
		   			</div>
		   		</div>
		   	</li>
		   	<li>
		   		<div className="container">
		   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
		   				<div className="slider-text-inner">
		   					<div className="desc">
		   						<span className="price">$540</span>
		   						<h2>The WW Chair</h2>
		   						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
			   					<p><a href="single.html" className="btn btn-primary btn-outline btn-lg">Purchase Now</a></p>
		   					</div>
		   				</div>
		   			</div>
		   		</div>
		   	</li>
		  	</ul>
	  	</div>
	</aside> */}

	<div id="fh5co-services" className="fh5co-bg-section">
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-4 text-center">
					<div className="feature-center animate-box" data-animate-effect="fadeIn">
						<span className="icon">
							<i className="icon-credit-card"></i>
						</span>
						<h3>Credit Card</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
						<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
					</div>
				</div>
				<div className="col-md-4 col-sm-4 text-center">
					<div className="feature-center animate-box" data-animate-effect="fadeIn">
						<span className="icon">
							<i className="icon-wallet"></i>
						</span>
						<h3>Save Money</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
						<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
					</div>
				</div>
				<div className="col-md-4 col-sm-4 text-center">
					<div className="feature-center animate-box" data-animate-effect="fadeIn">
						<span className="icon">
							<i className="icon-paper-plane"></i>
						</span>
						<h3>Free Delivery</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
						<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="fh5co-product">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span>Cool Stuff</span>
					<h2>Products.</h2>
					<p>The items below are some of my personal hand picked favourite products that are truly the most essential.</p>
				</div>
			</div>
			<Item />
		</div> 

	</div>
			
	
	<div id="fh5co-testimonial" className="fh5co-bg-section">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span>Testimony</span>
					<h2>Happy Clients</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="row animate-box">
						<div className="owl-carousel owl-carousel-fullwidth">
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/person1.jpg" alt="user" />
									</figure>
									<span>Jean Doe, via <a href="#" className="twitter">Twitter</a></span>
									<blockquote>
										<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/person2.jpg" alt="user" />
									</figure>
									<span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
									<blockquote>
										<p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/person3.jpg" alt="user" />
									</figure>
									<span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
									<blockquote>
										<p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	<div>
		<div className="container">
			<div className="row">
				<div className="display-t">
					<div className="display-tc">
						<div className="col-md-3 col-sm-6 animate-box">
							<div className="feature-center">
								<span className="icon">
									<i className="icon-eye"></i>
								</span>

								<span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000" data-refresh-interval="50">1</span>
								<span className="counter-label">Creativity Fuel</span>

							</div>
						</div>
						<div className="col-md-3 col-sm-6 animate-box">
							<div className="feature-center">
								<span className="icon">
									<i className="icon-shopping-cart"></i>
								</span>

								<span className="counter js-counter" data-from="0" data-to="450" data-speed="5000" data-refresh-interval="50">1</span>
								<span className="counter-label">Happy Clients</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 animate-box">
							<div className="feature-center">
								<span className="icon">
									<i className="icon-shop"></i>
								</span>
								<span className="counter js-counter" data-from="0" data-to="700" data-speed="5000" data-refresh-interval="50">1</span>
								<span className="counter-label">All Products</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 animate-box">
							<div className="feature-center">
								<span className="icon">
									<i className="icon-clock"></i>
								</span>

								<span className="counter js-counter" data-from="0" data-to="5605" data-speed="5000" data-refresh-interval="50">1</span>
								<span className="counter-label">Hours Spent</span>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="fh5co-started">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Newsletter</h2>
					<p>Just stay tune for our latest Product. Now you can subscribe</p>
				</div>
			</div>
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2">
					<form className="form-inline">
						<div className="col-md-6 col-sm-6">
							<div className="form-group">
								<label className="sr-only">Email</label>
								<input type="email" className="form-control" id="email" placeholder="Email" />
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<button type="submit" className="btn btn-default btn-block">Subscribe</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<footer id="fh5co-footer" role="contentinfo">
		<div className="container">
			<div className="row row-pb-md">
				<div className="col-md-4 fh5co-widget">
					<h3>Shop.</h3>
					<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
				</div>
				<div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul className="fh5co-footer-links">
						<li><a href="#">About</a></li>
						<li><a href="#">Help</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Terms</a></li>
						<li><a href="#">Meetups</a></li>
					</ul>
				</div>

				<div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul className="fh5co-footer-links">
						<li><a href="#">Shop</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Testimonials</a></li>
						<li><a href="#">Handbook</a></li>
						<li><a href="#">Held Desk</a></li>
					</ul>
				</div>

				<div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul className="fh5co-footer-links">
						<li><a href="#">Find Designers</a></li>
						<li><a href="#">Find Developers</a></li>
						<li><a href="#">Teams</a></li>
						<li><a href="#">Advertise</a></li>
						<li><a href="#">API</a></li>
					</ul>
				</div>
			</div>

			<div className="row copyright">
				<div className="col-md-12 text-center">
					<p>
						<small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
						<small className="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://blog.gessato.com/" target="_blank">Gessato</a> &amp; <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
					</p>
					
						<ul className="fh5co-social-icons">
							<li><a href="#"><i className="icon-twitter"></i></a></li>
							<li><a href="#"><i className="icon-facebook"></i></a></li>
							<li><a href="#"><i className="icon-linkedin"></i></a></li>
							<li><a href="#"><i className="icon-dribbble"></i></a></li>
						</ul>
					
				</div>
			</div>

		</div>
	</footer>
	</div>

	<div className="gototop js-top">
		<a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
  </div> 
  </div>

    );

  }

}

export default Home;