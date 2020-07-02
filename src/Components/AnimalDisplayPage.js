import React, { Component } from 'react';

class AnimalDisplayPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <h2>Animal</h2>
                <p>Your favorite animal is a <span className="word">{this.props.animalProp}</span>, awesome!</p>
            </section>
        )
    }
}

export default AnimalDisplayPage;