
import React, { Component } from 'react';


class Block extends React.Component {
    render() {
        return (
            <div className="brikke">
                <img  onClick={() => this.props.onClick()} src={this.props.value}/>
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
            trumpTurn: true,
            gameover: false,
        };
    }

    getwinner(board){
        //console.log(board[0]);

        if (board[0] === board[1] && board[2] === board[0] && board[1] === board[2]){
            console.log("a");
            return board[0];
        } else if (board[3] === board[4] && board[3] === board[5] && board[4] === board[5]){
            return board[3];
        } else if (board[6] === board[7] && board[6] === board[8] && board[7] === board[8]){
            return board[6];
        } else if (board[0] === board[3] && board[0] === board[6] && board[3] === board[6]){
            return board[0];
        } else if (board[1] === board[4] && board[1] === board[7] && board[4] === board[7]){
            return board[1];
        } else if (board[2] === board[5] && board[2] === board[8] && board[5] === board[8]){
            return board[2];
        } else if (board[0] === board[4] && board[0] === board[8] && board[4] === board[8]){
            return board[0];
        } else if (board[2] === board[4] && board[2] === board[6] && board[4] === board[6]){
            return board[2];
        } else {
            return null;
        }
    }

    newgame(){
        this.setState({
            blocks: Array(9).fill(props.nuke),
            trumpTurn: true,
            gameover: false,
        });
    }

    click(i){
        if(this.state.blocks[i] !== this.props.nuke){
            return;
        }

        if(gameover === true){
            this.newgame();
        }

        console.log("clocked:" + i);
        const newBoard = this.state.blocks;


        if(this.state.trumpTurn === true){
            newBoard[i] = this.props.trump;
        } else {
            newBoard[i] = this.props.kim;
        }

        const winner = this.getwinner(newBoard);
        if(winner !== null){
            if (winner === this.props.trump){
                console.log("trump won");
            } else if (winner === this.props.kim) {
                console.log("kim won");
            }else {
                console.log("no winner yet")
            }
        }

        this.setState({
            blocks: newBoard,
            trumpTurn: !this.state.trumpTurn,
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