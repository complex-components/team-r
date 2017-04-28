
import React,
 { Component } from 'react';

class Block extends Component {
    render() {
        const style = {
             padding:'0.3em',
             border: '.15emblack solid',
             height: '100px',
             width: '100px',
             float:'left'
        };

        const imageStyle = {
            ...style,
            width: '100px',
            height: '100px',
            float:'left',
            margin: '0'
        }
         
        return (
            <div style={style}>
                <img style={imageStyle} alt="derp" onClick={() => this.props.onClick()} src={this.props.value}/>
            </div>
        );
    }
}

export default Block;