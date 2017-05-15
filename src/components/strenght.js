import React from 'react';

export class Strenght extends React.Component {
    render() {
        return (
            <section className="skills">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about__left">
                        <div className="about__left--hexContainer">
                            <div className="hexText">
                                <h1>JS</h1>
                            </div>
                            <div className="hexagon"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 skills__text">
                        <h1>Front-end</h1>
                        <h2>Skills and Techniques</h2>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Sass/Less</li>
                                <li>Bootstrap/Material Design</li>
                                </ul>
                                <ul>
                                     <li>Git</li>
                                <li>JavaScript</li>
                                <li>AngularJs</li>
                                <li>Jquery</li>
                                    </ul>
                    </div>
                </div>
                {/*<section className="skills__images">
                            <div className="row center-lg center-md center-sm center-xs">
                        <div className="col-lg col-md col-sm-6 col-xs-12">
                           <img src={require("../images/html.png")}/>
                        </div>

                        <div className="col-lg col-md col-sm-6 col-xs-12">
                             <img src={require("../images/css3.jpg")}/>
                        </div>
                         <div className="col-lg col-md col-sm-6 col-xs-12">
                             <img src={require("../images/javascript.png")}/>
                        </div>
                         <div className="col-lg col-md col-sm-6 col-xs-12">
                             <img src={require("../images/angular_js.png")}/>
                        </div>
                        <div className="col-lg col-md col-sm-6 col-xs-12">
                             <img src={require("../images/git.png")}/>
                        </div>
                    </div>
                    </section>*/}
            </section>
        )
    }
}