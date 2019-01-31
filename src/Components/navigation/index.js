import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Animation from '../animation'
// This component have Different Routes to Navigate

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                   <Route exact path="/" component={Animation} />

                </div>
            </Router>
        )
    }
}
