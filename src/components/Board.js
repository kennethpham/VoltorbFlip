import React from 'react';
import Tile from './Tile';
import '../styles/Board.css'

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.tileItem = this.tileItem.bind(this);
    }

    // componentDidUpdate(){
    //     console.log(this.props.ids);
    // }

    tileItem(num) {
        return <div className={'tile'.concat(num.toString())} key = {num}>
                    <Tile val={this.props.vals[num]} updateScore={this.props.updateScore}/>
                </div>
    }

    render() {
        return(
            <div className="board-container">
                {this.props.ids.map(num =>
                        this.tileItem(num))}
            </div>
        )
    }
}

export default Board;