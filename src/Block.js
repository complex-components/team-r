/**
 * Created by pederthorup on 28/04/2017.
 */

import React, { Component } from 'react';

class Block extends Component {
    render() {
        return (
            <div className="brikke">
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Block;