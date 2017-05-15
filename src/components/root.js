import React from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
export class Root extends React.Component {
    render() {
        return(
            <section className="hero">
                <Header/>
                 <div>
                {this.props.children}
            </div>
            <Footer/>
                </section>
           
        )
    }
}