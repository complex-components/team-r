
import React, { Component } from 'react';

class Block extends Component {
    render() {
        return (
            <div className="brikke">
                <img alt="derp" onClick={() => this.props.onClick()} src={this.props.value}/>
            </div>
        );
    }
}

export default Block;