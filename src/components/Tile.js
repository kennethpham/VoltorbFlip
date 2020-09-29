import React from 'react';
import '../styles/Tile.css'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
        // console.log(this.state.hidden)
    }


    onClick() {
        this.props.changeBool(this.props.id)
    }
    

    render() {
        return(
            <div className="tileButton">
                {this.props.tileBools[this.props.id] ? <button className='tile_button' onClick={this.onClick}>?</button> 
                                : <button className='tile_button' disabled>{this.props.val}</button>}
            </div>
        )
    }
}

export default Tile;