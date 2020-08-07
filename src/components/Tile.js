import React from 'react';
import '../styles/Tile.css'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.val)
    }

    onClick() {
        if (this.state.hidden) {
            this.props.updateScore(this.props.val);
            this.setState({
                hidden: !this.state.hidden
            })
        }
        // console.log(this.state.hidden)
    }
    

    render() {
        return(
            <div className="tileButton">
                {this.state.hidden ? <button className='tile_button' onClick={this.onClick}>?</button> 
                                : <button className='tile_button' disabled>{this.props.val}</button>}
            </div>
        )
    }
}

export default Tile;