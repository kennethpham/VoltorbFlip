import React from 'react';
import '../styles/LeftSide.css'

class LeftSide extends React.Component {
    render() {
        return(
            <div className="leftSide-container">
                <div className="score">
                    Score: {this.props.score}
                </div>
                <div className="level">
                    Level: {this.props.lvl}
                </div>
            </div>
        )
    }
}

export default LeftSide;