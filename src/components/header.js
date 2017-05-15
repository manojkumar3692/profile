import React from 'react';
import {Link} from 'react-router';
 export class Header extends React.Component {
    render() {
        return(
            <section className="header">
                <header className="row middle-lg middle-md middle-sm middle-xs">
                        <div className="col-lg col-md col-sm col-xs center-lg center-md center-sm center-xs">
                                <div className="header__left">
                                        <ul>
                                            <li><Link to={"/about"}>About</Link></li>
                                            <li><Link to={"/strength"}>Strength</Link></li>
                                            </ul>
                                    </div>
                                    <div className="header__center">
                                        <ul>
                                               <li id="logo"><Link to={"/"}>Bingo</Link></li>
                                               </ul>
                                        </div>
                                    <div className="header__right">
                                        <ul>
                                          
                                            <li><a>Blog</a></li>
                                            <li><a>Contact</a></li>
                                            </ul>
                                        </div>
                            </div>

                </header>
            </section>
        );
    }
}

