import React, { Component } from 'react';

class NameDisplayPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <h2>Name</h2>
                <p>Hello <span className="word">{this.props.nameProp}</span>, how are you?</p>
            </section>
        )
    }
}

export default NameDisplayPage;