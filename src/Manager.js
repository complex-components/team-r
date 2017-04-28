
import React, { Component } from 'react';
import Board from './Board';


class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: Array(9).fill(props.nuke),
            trumpTurn: true,
            gameover: false,
            overskrift:"Dagsaktuell 3 på rad",
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
            blocks: Array(9).fill(this.props.nuke),
            trumpTurn: true,
            gameover: false,
            overskrift:"Dagsaktuell 3 på rad",
        });
    }

    click(i){

        if(this.state.gameover === true){
            this.newgame();
            return;
        } else {
            if(this.state.blocks[i] !== this.props.nuke){
                return;
            }
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
                this.setState({
                    gameover: true,
                    overskrift: "trump won",

                });
            } else if (winner === this.props.kim) {
                this.setState({
                    gameover: true,
                    overskrift: "kim won",
                });
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
        const overskriftStyle = {
            font: '1.5em verdana',
            margin: '2em'
        }

        return(
            <div>
                <div style={overskriftStyle}>{this.state.overskrift}</div>
                <Board
                blocks={this.state.blocks}
                onClick={(i) => this.click(i)}
                />
            </div>
        );
    }

}

export default Manager;