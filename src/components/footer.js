import React from 'react';

export class Footer extends React.Component {
        render() {
                return (
                        <section className="footer">
                                <footer>
                                        <div className="row">
                                                <div className="col-lg col-md col-sm col-xs">
                                                        <h1>Stay Connect @ 24/7</h1>
                                                </div>
                                                <div className="col-lg col-md col-sm col-xs end-lg end-sm end-md end-xs">
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
                                </footer>
                        </section>
                )
        }
}