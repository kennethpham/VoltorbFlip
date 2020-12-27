import React from 'react';
import '../styles/RightSide.css'
// import voltorbPic from '../../public/voltorb.png'


class RightSide extends React.Component {
    constructor(props) {
        super(props)

        this.createBox = this.createBox.bind(this);
    }

    createBox(num) {
        return <div>{num}</div>
    }

    render() {
        return(
            <div className='rightSide-container'>
                <div className='right'>
                    <div className='rMultTotal'>
                        {this.props.totals[0]}
                    </div>
                    <div className='rPic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='rVoltorbs' >
                        {this.props.numZeros[0]}
                    </div>
                </div>


                <div className='right1'>
                    <div className='r1MultTotal'>
                        {this.props.totals[1]}
                    </div>
                    <div className='r1Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='r1Voltorbs'>
                        {this.props.numZeros[1]}
                    </div>
                </div>
                <div className='right2'>
                    <div className='r2MultTotal'>
                        {this.props.totals[2]}
                    </div>
                    <div className='r2Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='r2Voltorbs'>
                        {this.props.numZeros[2]}
                    </div>
                </div>
                <div className='right3'>
                    <div className='r3MultTotal'>
                        {this.props.totals[3]}
                    </div>
                    <div className='r3Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='r3Voltorbs'>
                        {this.props.numZeros[3]}
                    </div>
                </div>
                <div className='right4'>
                    <div className='r4MultTotal'>
                        {this.props.totals[4]}
                    </div>
                    <div className='r4Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='r4Voltorbs'>
                        {this.props.numZeros[4]}
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSide;