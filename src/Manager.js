
import React, { Component } from 'react';


class Block extends React.Component {
    render() {
        return (
            <div>
                <img className="brikke" onClick={() => this.props.onClick()} src={this.props.value}/>
            </div>
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


class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: Array(9).fill(props.nuke),
            isPlayer1Turn: true,
        };
    }

    click(i){
        console.log("clocked:" + i);
        const newBoard = this.state.blocks;

        if(this.state.isPlayer1Turn === true){
            newBoard[i] = this.props.trump;
        } else {
            newBoard[i] = this.props.kim;
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