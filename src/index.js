import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    const winningSquareStyle = {
        backgroundColor: '#ccc'
    };

    return (
        <button
            className="square"
            style={props.winningSquare ? winningSquareStyle : null}
            onClick={props.onClick}

        >
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext? 'x': 'o';
        this.setState({
            squares : squares,
            xIsNext : !this.state.xIsNext
        })
    }

    renderSquare(i) {
        let winningSquare = !!(this.props.winner && this.props.winner.includes(i));
        return (
            <Square
                key = {i}
                value={this.props.squares[i]}
                onClick = { () => this.props.onClick(i) }
                winningSquare = {winningSquare}
            />
            );
    }

    render() {
        let boardSquares = [];
        for(let row = 0; row < 3; row++){
            let boardRow = [];
            for(let col = 0; col < 3; col++){
                boardRow.push(this.renderSquare((row * 3) + col));
            }
            boardSquares.push(<div className="board-row" key={row}>{boardRow}</div>);
        }

        return (
            <div>
                {boardSquares}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [{
                    squares: Array(9).fill(null),
                    coordx : null,
                    coordy : null
                }],
            xIsNext : true,
            stepNumber: 0,
            ascending: true
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const active = {
            fontWeight: 'bold'
        };
        const inactive = {
            fontWeight: 'normal'
        };
        const ascending = this.state.ascending;

        const moves = history.map((step, move) => {

            const desc = move ?
                'Go to move #' + move +' Coordinates: ('+ step.coordx+', '+ step.coordy +')' :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} style={this.state.stepNumber === move? active: inactive}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner.winner;
        } else {
            if(current.squares.includes(null)){
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

            } else {
                status = 'Draw'
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winner={winner && winner.winningSquares}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{ascending ? moves : moves.reverse()}</ol>
                    <button onClick={() => this.sortHandleClick()}>Toggle Sort Order</button>
                </div>
            </div>
        );
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                coordx : parseInt(i/3),
                coordy : parseInt(i%3)
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    sortHandleClick(){
        this.setState({
            ascending: !this.state.ascending
        });
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                winningSquares: lines[i]
            };
        }
    }
    return null;
}