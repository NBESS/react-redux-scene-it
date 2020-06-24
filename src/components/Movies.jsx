import React, { Component } from 'react'

export default class Movies extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div>
                <h1>Movie Details go here</h1>
            </div>
        )
    }
}
