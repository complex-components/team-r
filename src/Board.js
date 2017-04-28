
import React, { Component } from 'react';
import Block from './Block';

class Board extends Component {
    drawBlock(i) {
        const blocks = this.props.blocks;
        return <Block value={blocks[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
        return (

            <div className="brett">
                <div className="rad">
                    {this.drawBlock(0)}
                    {this.drawBlock(1)}
                    {this.drawBlock(2)}
                </div>
                <div className="rad">
                    {this.drawBlock(3)}
                    {this.drawBlock(4)}
                    {this.drawBlock(5)}
                </div>
                <div className="rad">
                    {this.drawBlock(6)}
                    {this.drawBlock(7)}
                    {this.drawBlock(8)}
                </div>
            </div>
        );
    }
}

export default Board;