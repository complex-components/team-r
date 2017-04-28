
import React, { Component } from 'react';
import Block from './Block';

class Board extends Component {
    drawBlock(index) {
        const blocks = this.props.blocks;
        return <Block value={blocks[index]} onClick={() => this.props.onClick(index)} />;
    }
    render() {

        const boardStyle = {
                display: '-webkit-flex',
                display: 'inline',
                flexWrap:'nowrap'
        }

        const radStyle = {
           height:'100px',
            marginLeft:'40%',
            width:'400px'
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