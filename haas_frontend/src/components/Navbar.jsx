// src/components/Navbar.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.scss';
//import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="uni-home-1">
      <div id="wrapper-container" className="site-wrapper-container">
        <header>
            <div className="uni-medicare-header sticky-menu">
                <div className="container">
                    <div className="uni-medicare-header-main">
                        <div className="row">
                            <div className="col-md-2">
                                {/*  LOGO  */}
                                <div className="wrapper-logo">
                                    <a className="logo-default" href="#">
                                      <img src="images/logo.png" alt="" className="img-responsive" />
                                    </a>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                {/*  MENU TEXT  */}
                                <div className="uni-main-menu">
                                    <nav className="main-navigation uni-menu-text">
                                        <div className="cssmenu">
                                            <ul>
                                                <li className="has-sub"><a href="#">Home</a>
                                                    <ul>
                                                        <li><a href="index-2.html">Home 1</a></li>
                                                        <li><a href="01_02_home_2.html">Home 2</a></li>
                                                        <li><a href="01_03_home_3.html">Home 3</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href='#'>Page</a>
                                                    <ul>
                                                        <li><a href="02_01_about.html">About</a></li>
                                                        <li className="has-sub"><a href="#">doctor</a>
                                                            <ul>
                                                                <li><a href="02_02_doctor.html">Doctors </a></li>
                                                                <li><a href="02_03_doctor_details.html">Doctors Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="02_04_contact.html">Contact</a></li>
                                                        <li><a href="02_05_gallery.html">Gallery</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="03_01_services.html">Services</a></li>
                                                <li className="has-sub"><a href="#">Departments</a>
                                                    <ul>
                                                        <li><a href="04_01_departments.html">Departments</a></li>
                                                        <li><a href="04_02_single_department.html">Single Departments</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href='#'>Blog</a>
                                                    <ul>
                                                        <li><a href="05_01_blog_list.html">Blog list</a></li>
                                                        <li><a href="05_02_blog_grid.html">Blog Grid</a></li>
                                                        <li><a href="05_03_single_post.html">Single post</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href='#'>shop</a>
                                                    <ul>
                                                        <li><a href="06_01_shop.html">Shop</a></li>
                                                        <li><a href="06_02_single_product.html">Single Product</a></li>
                                                        <li><a href="06_03_cart.html">Cart</a></li>
                                                        <li><a href="06_04_checkout.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub hover-element"><a href='#'>Shortcode</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                {/*  SEARCH AND APPOINTMENT  */}
                                <div className="uni-search-appointment">
                                    <ul>
                                        <li className="un-btn-search">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </li>
                                        <li className="uni-btn-appointment">
                                            <a href="#">Appointment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* SHORTCODE */}
                        <div className="show-hover-shortcodes animated">
                            <div className="short-code-title">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>SHORT CODE 1</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <h4>SHORT CODE 2</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <h4>SHORT CODE 3</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <h4>SHORT CODE 4</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="short-code-content">
                                <div className="row">
                                    <div className="col-md-3">
                                        <ul>
                                            <li><a href="07_01_buttons.html"><i className="fa fa-plus-square" aria-hidden="true"></i>Buttons</a></li>
                                            <li><a href="07_02_icons_box.html"><i className="fa fa-cube" aria-hidden="true"></i>Icon Box</a></li>
                                            <li><a href="07_03_progress.html"><i className="fa fa-tasks" aria-hidden="true"></i>Process Bar</a></li>
                                            <li><a href="07_04_tabs.html"><i className="fa fa-columns" aria-hidden="true"></i>Tabs</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li><a href="07_05_accordion.html"><i className="fa fa-list" aria-hidden="true"></i>Accordion</a></li>
                                            <li><a href="07_06_counter.html"><i className="fa fa-tachometer" aria-hidden="true"></i>Counter</a></li>
                                            <li><a href="07_07_testimonials.html"><i className="fa fa-comments-o" aria-hidden="true"></i>Testimonials</a></li>
                                            <li><a href="07_08_typography.html"><i className="fa fa-text-width" aria-hidden="true"></i>Typography</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li><a href="07_09_partner.html"><i className="fa fa-handshake-o" aria-hidden="true"></i> Partner</a></li>
                                            <li><a href="07_10_team.html"><i className="fa fa-users" aria-hidden="true"></i> Team</a></li>
                                            <li><a href="07_11_item_list.html"><i className="fa fa-list-ol" aria-hidden="true"></i> Item List</a></li>
                                            <li><a href="07_12_divider.html"><i className="fa fa-chain-broken" aria-hidden="true"></i>Dividers</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li><a href="07_13_columns.html"><i className="fa fa-bar-chart" aria-hidden="true"></i> Columns</a></li>
                                            <li><a href="07_14_pricing_table.html"><i className="fa fa-address-card-o" aria-hidden="true"></i> Pricing table</a></li>
                                            <li><a href="#"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> 404 Pages</a></li>
                                            <li><a href="#"><i className="fa fa-repeat" aria-hidden="true"></i> Comming soon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*FORM SEARCH*/}
                        <div className="uni-form-search-header">
                            <div className="box-search-header collapse" id="box-search-header">
                                <div className="uni-input-group">
                                    <input type="text" name="key" placeholder="Search" className="form-control" />
                                    <button className="uni-btn btn-search">
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div id="main-content" className="site-main-content">
            <section className="site-content-area">

                {/*  BANNER  */}
                <div className="uni-banner">
                    <div className="uni-owl-one-item owl-carousel owl-theme">
                        <div className="item">
                            <div className="uni-banner-img uni-background-5"></div>
                            <div className="content animated" data-animation="flipInX" data-delay="0.9s">
                                <div className="container">
                                    <div className="caption">
                                        <h1>Let us protect your health</h1>
                                        <p>
                                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                                            <br />
                                            Donec eu libero sit amet quam egestas semper.
                                        </p>
                                        <a href="#">our services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="uni-banner-img uni-background-6"></div>
                            <div className="content animated" data-animation="flipInX" data-delay="0.9s">
                                <div className="container">
                                    <div className="caption">
                                        <h1>Let us protect your health</h1>
                                        <p>
                                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                                            <br />
                                            Donec eu libero sit amet quam egestas semper.
                                        </p>
                                        <a href="#">our services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="uni-banner-img uni-background-7"></div>
                            <div className="content animated" data-animation="flipInX" data-delay="0.9s">
                                <div className="container">
                                    <div className="caption">
                                        <h1>Let us protect your health</h1>
                                        <p>
                                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                                            <br />
                                            Donec eu libero sit amet quam egestas semper.
                                        </p>
                                        <a href="#">our services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  OPENING HOURS AND BOOK APPOINTMENT  */}
                <div className="uni-home-opening-book">
                    <div className="container">
                        <div className="uni-home-opening-book-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="uni-services-opinging-hours">
                                        <div className="uni-services-opinging-hours-title">
                                            <div className="icon">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            </div>
                                            <h4>opening hours</h4>
                                        </div>
                                        <div className="uni-services-opinging-hours-content">
                                            <table className="table">
                                                <tr>
                                                    <td>monday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                                <tr>
                                                    <td>tuesday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                                <tr>
                                                    <td>wednesday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                                <tr>
                                                    <td>thursday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                                <tr>
                                                    <td>friday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                                <tr>
                                                    <td>sunday</td>
                                                    <td>8:00 - 17:00</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="uni-single-department-appointment-form">

                                        <div className="uni-home-title">
                                            <h3>Book appoitment</h3>
                                            <div className="uni-underline"></div>
                                        </div>

                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="input-group form-group">
                                                        <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="name" value="" placeholder="your name" />
                                                    </div>
                                                    <div className="input-group form-group">
                                                        <span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                                        <input type="tel" className="form-control" name="phone" value="" placeholder="phone number" />
                                                    </div>
                                                    <div className="input-group form-group">
                                                        <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                                        <input type="email" className="form-control" name="email" value="" placeholder="email" />
                                                    </div>
                                                    <div className="input-group form-group">
                                                        <div className="input-group date date-check-in" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                                            <span className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                                            <input name="date1" className="form-control" type="text" value="12-02-2017" />
                                                            <span className="input-group-addon btn"><i className="fa fa-calendar" id="ti-calendar1" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="input-group form-group">
                                                        <textarea id="message" name="phone" className="form-control" placeholder="note"></textarea>
                                                    </div>
                                                    <button className="vk-btn vk-btn-send">send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  DEPARTMENT  */}
                <div className="uni-hơm-1-department">
                    <div className="container">
                        <div className="uni-home-title">
                            <h3>Department</h3>
                            <div className="uni-underline"></div>
                        </div>
                        <div className="uni-shortcode-icon-box-1">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon-5.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>cardiology</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon-4.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>Neurology</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon-3.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>Orthopedics</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon-2.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>cancer department</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon-1.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>Ophthalmology</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icon-box-1-default">
                                        <div className="item-icons">
                                            <img src="images/icons_box/icon_1/icon.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <h4>Respiratory</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas adipisicing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  OUR DOCTOR  */}
                <div className="uni-home-1-our-doctor">
                    <div className="uni-shortcode-team-2 uni-background-2">
                        <div className="container">

                                <div className="uni-home-title">
                                    <h3>Our Doctor</h3>
                                    <div className="uni-underline"></div>
                                </div>

                            <div className="uni-owl-four-item owl-carousel owl-theme">
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-5.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>adam jonson</h4>
                                                    <span>Cardiologist</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img1.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Henrik larssom</h4>
                                                    <span>neurologist</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img2.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-3.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>amanda smith</h4>
                                                    <span>Ophthalmology doctor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img3.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>david martin</h4>
                                                    <span>Cancer doctor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-5.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>adam jonson</h4>
                                                    <span>Cardiologist</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-team-default">
                                        <div className="item-img">
                                            <img src="images/team/img1.png" alt="" className="img-responsive" />
                                        </div>
                                        <div className="item-caption">
                                            <div className="col-md-3 col-sm-3 col-xs-3 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Henrik larssom</h4>
                                                    <span>neurologist</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  OUR SERVICES  */}
                <div className="uni-home-our-services">
                    <div className="uni-shortcode-icons-box-5">
                        <div className="container">

                            <div className="uni-home-title">
                                <h3>Our Services</h3>
                                <div className="uni-underline"></div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-5.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Corneal transplant surgery</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Cardiothoracic Surgery</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-3.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>General health check</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Diagnosis &amp; <br /> treatment of cancer</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>treatment of <br /> pneumonia</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="uni-shortcode-icons-box-5-default">
                                        <div className="item-icons-title">
                                            <div className="col-md-4 uni-clear-padding">
                                                <div className="item-icons">
                                                    <img src="images/icons_box/icon_4/icon.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 uni-clear-padding">
                                                <div className="item-title">
                                                    <h4>Treatment of <br /> dermatitis</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                                ultricies eget...
                                            </p>
                                            <a href="#" className="readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-all-services">
                                <a href="#">All services +</a>
                            </div>

                        </div>
                    </div>
                </div>

                {/*  CUSTOMERS SAY  */}
                <div className="uni-home-customers-says">
                    <div className="uni-shortcode-testimonials-2 uni-background-3">
                        <div className="container">

                            <div className="uni-home-title">
                                <h3>Customers say</h3>
                                <div className="uni-underline"></div>
                            </div>

                            <div className="uni-owl-two-item owl-carousel owl-theme">
                                <div className="item">
                                    <div className="uni-shortcode-testimonials-default">
                                        <div className="item-info">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="item-info-img">
                                                        <img src="images/testimonial/img.png" alt="" className="img-responsive" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-sm-8">
                                                    <div className="item-info-title">
                                                        <h4>amanda smith</h4>
                                                        <p className="testimonial_subtitle">myopia patients</p>
                                                    </div>
                                                    <div className="uni-divider"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-shortcode-testimonials-default">
                                        <div className="item-info">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="item-info-img">
                                                        <img src="images/testimonial/img1.png" alt="" className="img-responsive" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-sm-8">
                                                    <div className="item-info-title">
                                                        <h4>amanda jonson</h4>
                                                        <p className="testimonial_subtitle">Broken bone</p>
                                                    </div>
                                                    <div className="uni-divider"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-shortcode-testimonials-default">
                                        <div className="item-info">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="item-info-img">
                                                        <img src="images/testimonial/img.png" alt="" className="img-responsive" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-sm-8">
                                                    <div className="item-info-title">
                                                        <h4>amanda smith</h4>
                                                        <p className="testimonial_subtitle">myopia patients</p>
                                                    </div>
                                                    <div className="uni-divider"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="uni-shortcode-testimonials-default">
                                        <div className="item-info">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="item-info-img">
                                                        <img src="images/testimonial/img1.png" alt="" className="img-responsive" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-sm-8">
                                                    <div className="item-info-title">
                                                        <h4>amanda jonson</h4>
                                                        <p className="testimonial_subtitle">Broken bone</p>
                                                    </div>
                                                    <div className="uni-divider"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-caption">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  FAQ'S  and LASTEST POST  */}
                <div className="uni-home-faq-latest-post">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="uni-home-faq">
                                    <div className="uni-home-title">
                                        <h3>Faqs</h3>
                                        <div className="uni-line"></div>
                                    </div>
                                    <div className="accordion-default">
                                        <div className="accordion-min-plus">
                                            <div className="accordion">
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">Aliquam tincidunt mauris eu risus?</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">Vestibulum auctor dapibus neque?</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">cancer department</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">Morbi in sem quis dui placerat ornare?</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h4 className="accordion-toggle">Phasellus ultrices nulla quis nibh, Quisque a lectus?</h4>
                                                    <div className="accordion-content">
                                                        <p>
                                                            Pellentesque habitant morbi tristique senectus et netus et
                                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu libero sit amet quam egestas semper. Aenean ultricies
                                                            mi vitae est. Mauris placerat eleifend leo
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="uni-home-latest-post">
                                    <div className="uni-home-title">
                                        <h3>latest posts</h3>
                                        <div className="uni-line"></div>
                                    </div>
                                    <div className="uni-home-latest-post-body">
                                        <div className="item">
                                            <div className="item-img">
                                                <a href="#"><img src="images/home1/lastestpost/img2.png" alt="" className="img-responsive" /></a>
                                            </div>
                                            <div className="item-caption">
                                                <h4><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</a></h4>
                                                <span className="time">June 12, 2017</span>
                                            </div>
                                        </div>
                                        <div className="uni-divider"></div>
                                        <div className="item">
                                            <div className="item-img">
                                                <a href="#"><img src="images/home1/lastestpost/img3.png" alt="" className="img-responsive" /></a>
                                            </div>
                                            <div className="item-caption">
                                                <h4><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</a></h4>
                                                <span className="time">June 12, 2017</span>
                                            </div>
                                        </div>
                                        <div className="uni-divider"></div>
                                        <div className="item">
                                            <div className="item-img">
                                                <a href="#"><img src="images/home1/lastestpost/img4.png" alt="" className="img-responsive" /></a>
                                            </div>
                                            <div className="item-caption">
                                                <h4><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</a></h4>
                                                <span className="time">June 12, 2017</span>
                                            </div>
                                        </div>
                                        <div className="uni-divider"></div>
                                        <div className="item">
                                            <div className="item-img">
                                                <a href="#"><img src="images/home1/lastestpost/img5.png" alt="" className="img-responsive" /></a>
                                            </div>
                                            <div className="item-caption">
                                                <h4><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</a></h4>
                                                <span className="time">June 12, 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  MAP  */}
                <div className="uni-home-map">
                    <div className="uni-about-map">
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.355677596112!2d-0.13052618407551403!3d50.82457546821709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875859878db2cc7%3A0xff129250121f260d!2s45+Queen's+Park+Rd%2C+Brighton+BN2+0GJ%2C+V%C6%B0%C6%A1ng+Qu%E1%BB%91c+Anh!5e0!3m2!1svi!2s!4v1514436176997"  height="700" style="border:0" ></iframe>
                    </div>
                </div>


            </section>
        </div>

        <footer className="site-footer footer-default">
            <div className="footer-main-content">
                <div className="container">
                    <div className="row">
                        <div className="footer-main-content-elements">
                            <div className="footer-main-content-element col-md-3 col-sm-6">
                                <aside className="widget">
                                    <div className="widget-title uni-uppercase"><a href="#"><img src="images/logowhite.png" alt="" className="img-responsive" /></a></div>
                                    <div className="widget-content">
                                        <p>
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fame ac
                                            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
                                        </p>
                                        <div className="uni-info-contact">
                                            <ul>
                                                <li> <i className="fa fa-map-marker" aria-hidden="true"></i> 45 Queens Park Rd, Brighton,  UK</li>
                                                <li><i className="fa fa-phone" aria-hidden="true"></i> (094) 123 4567 - (094) 123 4568</li>
                                                <li><i className="fa fa-envelope-o" aria-hidden="true"></i> medicareplus@domain.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="footer-main-content-element col-md-3 col-sm-6">
                                <aside className="widget">
                                    <h3 className="widget-title uni-uppercase">quick links</h3>
                                    <div className="widget-content">
                                        <div className="uni-quick-link">
                                            <ul>
                                                <li><a href="#"><span>+</span> Home</a></li>
                                                <li><a href="#"><span>+</span> about</a></li>
                                                <li><a href="#"><span>+</span> services</a></li>
                                                <li><a href="#"><span>+</span> timetable</a></li>
                                                <li><a href="#"><span>+</span> blog</a></li>
                                                <li><a href="#"><span>+</span> contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="footer-main-content-element col-md-3 col-sm-6">
                                <aside className="widget">
                                    <h3 className="widget-title uni-uppercase">latest posts</h3>
                                    <div className="widget-content">
                                        <div className="uni-footer-latest-post">
                                            <ul>
                                                <li>
                                                    <h4><a href="#">Lorem ipsum dolor sit amet, consectetuer</a></h4>
                                                    <span className="time">june 12, 2017</span>
                                                </li>
                                                <li>
                                                    <h4><a href="#">Aliquam tincidunt mauris eu risus amet</a></h4>
                                                    <span className="time">june 12, 2017</span>
                                                </li>
                                                <li>
                                                    <h4><a href="#">Morbi in sem quis dui placerat ornare column</a></h4>
                                                    <span className="time">june 12, 2017</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="footer-main-content-element col-md-3 col-sm-6">
                                <aside className="widget">
                                    <h3 className="widget-title uni-uppercase">News<span>letter</span></h3>
                                    <div className="widget-content">
                                        <div className="uni-footer-newletter">
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                                <button className="btn btn-sub" type="submit">subscribe</button>
                                            </div>
                                            <div className="uni-social">
                                                <h4>Follow us</h4>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-content">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="copyright-text"><a href="templateshub.net">Templateshub</a></p>
                            </div>
                            <div className="col-sm-6">
                                <ul className="copyright-menu">
                                    <li><a href="#">Term Of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Nav;
