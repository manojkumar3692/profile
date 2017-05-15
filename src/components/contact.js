import React from 'react';

export class Contact extends React.Component {
    render () {
        return (
            <section className="contact">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about__left">
                        <div className="about__left--hexContainer">
                            <div className="hexText">
                                <h1>Hey</h1>
                            </div>
                            <div className="hexagon"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contact__text">
                        <h1>Contact</h1>
                        <h2>Reach me out 24/7</h2> 
                        <h3>Have a cool project in mind, and think I can help you with it?
Feel free to e-mail me at manoj.officialmail@gmail.com</h3>
<div className="contact__text--map">
<iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1534874546096!2d77.60405181473945!3d12.897850290904316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzUyLjMiTiA3N8KwMzYnMjIuNSJF!5e0!3m2!1sen!2sin!4v1494844254986"}></iframe>
                           </div>
                            <ul>
                                  <li>
                                                                        <a>
                                                                                <i className="ion-social-facebook-outline"></i>
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a>
                                                                                <i className="ion-social-twitter-outline"></i>
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a>
                                                                                <i className="ion-social-linkedin-outline"></i>
                                                                        </a>
                                                                </li>
                                    </ul>
                    </div>
                </div>
                </section>

        )
    }
}