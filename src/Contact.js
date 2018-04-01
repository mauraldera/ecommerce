import React, { Component } from 'react'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render () {
        return (
    <div>
               {/* <div className="fh5co-loader"></div> */}
	
	<div id="page">
	

	<header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner">
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					<div className="display-t">
						<div className="display-tc animate-box" data-animate-effect="fadeIn">
							<h1>Contact Us</h1>
							<h2>Free html5 templates Made by <a href="http://freehtml5.co" target="_blank">freehtml5.co</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	
	<div id="fh5co-contact">
		<div className="container">
			<div className="row">
				<div className="col-md-5 col-md-push-1 animate-box">
					
					<div className="fh5co-contact-info">
						<h3>Contact Information</h3>
						<ul>
							<li className="address">198 West 21th Street, <br /> Suite 721 New York NY 10016</li>
							<li className="phone"><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li className="email"><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
							<li className="url"><a href="http://gettemplates.co">gettemplates.co</a></li>
						</ul>
					</div>

				</div>
				<div className="col-md-6 animate-box">
					<h3>Get In Touch</h3>
					<form action="#">
						<div className="row form-group">
							<div className="col-md-6">
							
								<input type="text" id="fname" className="form-control" placeholder="Your firstname" />
							</div>
							<div className="col-md-6">
								
								<input type="text" id="lname" className="form-control" placeholder="Your lastname" />
							</div>
						</div>

						<div className="row form-group">
							<div className="col-md-12">
							
								<input type="text" id="email" className="form-control" placeholder="Your email address" />
							</div>
						</div>

						<div className="row form-group">
							<div className="col-md-12">
								
								<input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
							</div>
						</div>

						<div className="row form-group">
							<div className="col-md-12">
								
								<textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
							</div>
						</div>
						<div className="form-group">
							<input type="submit" value="Send Message" className="btn btn-primary" />
						</div>

					</form>		
				</div>
			</div>
			
		</div>
	</div>

	{/* <div id="map" className="animate-box" data-animate-effect="fadeIn"></div> */}

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
								<label for="email" className="sr-only">Email</label>
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

				{/* <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1"> */}
					<ul className="fh5co-footer-links">
						<li><a href="#">Shop</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Testimonials</a></li>
						<li><a href="#">Handbook</a></li>
						<li><a href="#">Held Desk</a></li>
					</ul>
				{/* </div> */}

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
					<p>
						<ul className="fh5co-social-icons">
							<li><a href="#"><i className="icon-twitter"></i></a></li>
							<li><a href="#"><i className="icon-facebook"></i></a></li>
							<li><a href="#"><i className="icon-linkedin"></i></a></li>
							<li><a href="#"><i className="icon-dribbble"></i></a></li>
						</ul>
					</p>
				</div>
			</div>

		</div>
	</footer>
	</div>

	<div className="gototop js-top">
		<a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
	</div>
            </div>
        )
    }
}

export default Contact