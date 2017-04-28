
import React, { Component } from 'react';


class Block extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}


class Board extends React.Component {
    drawBlock(i) {
        const blocks = this.props.blocks;
        return <Block value={blocks[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.drawBlock(0)}
                    {this.drawBlock(1)}
                    {this.drawBlock(2)}
                </div>
                <div className="board-row">
                    {this.drawBlock(3)}
                    {this.drawBlock(4)}
                    {this.drawBlock(5)}
                </div>
                <div className="board-row">
                    {this.drawBlock(6)}
                    {this.drawBlock(7)}
                    {this.drawBlock(8)}
                </div>
            </div>
        );
    }
}


class Manager extends React.Component {
    constructor() {
        super();
        this.state = {
            blocks: Array(9).fill(null),
            isPlayer1Turn: true,
        };
    }

    click(i){

        const newBoard = this.state.blocks;

        if(this.state.isPlayer1Turn === true){
            newBoard[i] = "x";
        } else {
            newBoard[i] = "o";
        }

        this.setState({
            blocks: newBoard,
            isPlayer1Turn: !this.state.isPlayer1Turn,
        });
    }

    render(){


        return(
            <div>
                <Board
                blocks={this.state.blocks}
                onClick={(i) => this.click(i)}
                />
            </div>
        );
    }

}

export default Manager;