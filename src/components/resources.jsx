import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Resources extends Component {
    render() {
        return (
            <div>
                <p>Super Special Recipe</p>
                <ul>
                    <li>1 Cup Sugar</li>
                    <li>1 Cup Pepper</li>
                    <li>1 Cup Salt</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps)(Resources);
