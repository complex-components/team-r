
import React, { Component } from 'react';
import Block from './Block';

class Board extends Component {
    drawBlock(index) {
        const blocks = this.props.blocks;
        return <Block value={blocks[index]} onClick={() => this.props.onClick(index)} />;
    }
    render() {

        const boardStyle = {
            width: '100%'
        }

        const radStyle = {
            float:'left',
            clear:'both',
            marginLeft:'40%',
            minWidth:'320px' 
        }

        return (

            <div style={boardStyle}>
                <div style={radStyle}>
                    {this.drawBlock(0)}
                    {this.drawBlock(1)}
                    {this.drawBlock(2)}
                </div>
                <div style={radStyle}>
                    {this.drawBlock(3)}
                    {this.drawBlock(4)}
                    {this.drawBlock(5)}
                </div>
                <div style={radStyle}>
                    {this.drawBlock(6)}
                    {this.drawBlock(7)}
                    {this.drawBlock(8)}
                </div>
            </div>
        );
    }
}

export default Board;