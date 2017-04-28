/**
 * Created by pederthorup on 28/04/2017.
 */

import React, { Component } from 'react';

class Block extends Component {
    render() {
        return (
            <div className="brikke">
                <p>&nbsp;{this.props.value}&nbsp;</p>
            </div>
        );
    }
}

export default Block;