import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <section className="home__container">
                    <div className="home__banner">
                        <div className="home__title">
                            <h1>Infinite</h1>
                            <h2>loop.</h2>
                            {/*<button>Hello World</button>*/}
                        </div>
                        <span className="home__banner--first">
                            <span className="home__banner--second"></span>
                        </span>
                    </div>
                    <div className="home__command">
                        <div className="home__command--top">
                            <ul>
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p id="yellow"></p>
                                </li>
                                <li>
                                    <p id="green"></p>
                                </li>
                            </ul>
                        </div>
                        <div className="home__command--align">
                            <h1>Last login: Sat May 13 08:59:15 on ttys000</h1>
                            <h2>manojs-MacBook-Pro:hello world $ node -v</h2>
                            <h2>v6.10.3</h2>
                            <h2>manojs-MacBook-Pro:hello world $ npm start</h2>
                            <h2>Compiled succesfully with warning below
                            </h2>
                            <h2>Find a little bit of designer - enterpreneur - backpacker - and lots of bugs</h2>
                            <h2>Scroll down to understand why this website was not build in single page
                            </h2>
                            <h2>manojs-MacBook-Pro:hello world $ peace --save-dev</h2>
                        </div>
                    </div>
                </section>

                <section className="whyReact">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 whyReact__left">
                            <div className="whyReact__left--hexContainer">
                                <div className="hexText">
                                    <h1>Why</h1>
                                </div>
                                <div className="hexagon"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 whyReact__right">
                            <h1>React js !Hello World
                            </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book</p>
                            <p>It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
