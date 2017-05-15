import React from 'react';

export class About extends React.Component {
    render() {
        return (
            <section className="about row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about__left">
                    <div className="about__left--hexContainer">
                        <div className="hexText">
                            <h1>ME</h1>
                        </div>
                        <div className="hexagon"></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about__right">
                    <h1>HI,</h1>
                    <h2>I'm a front-end developer with 1.5 yrs of product & enterprice experience,
                        based in Bangalore</h2>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</h3>
                     <img src={require("../images/hashworks.jpg")}/>
                </div>
                {/*<section className="about__experience">
                    <div className="row center-lg center-md center-sm center-xs">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                           <img src={require("../images/pikkol.png")}/>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            
                        </div>
                    </div>
                </section>*/}
            </section>
        )
    }
}
