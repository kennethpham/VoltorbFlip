import React from 'react';
import '../styles/Bottom.css'

class Bottom extends React.Component {
    render() {
        return(
            <div className='bottom-container'>
                <div className='bot'>
                    <div className='bMultTotal'>
                        {this.props.totals[5]}
                    </div>
                    <div className='bPic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='bVoltorbs'>
                        {this.props.numZeros[5]}
                    </div>
                </div>
                <div className='bot1'>
                    <div className='b1MultTotal'>
                        {this.props.totals[6]}
                    </div>
                    <div className='b1Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='b1Voltorbs'>
                        {this.props.numZeros[6]}
                    </div>
                </div>
                <div className='bot2'>
                    <div className='b2MultTotal'>
                        {this.props.totals[7]}
                    </div>
                    <div className='b2Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='b2Voltorbs'>
                        {this.props.numZeros[7]}
                    </div>
                </div>
                <div className='bot3'>
                    <div className='b3MultTotal'>
                        {this.props.totals[8]}
                    </div>
                    <div className='b3Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='b3Voltorbs'>
                        {this.props.numZeros[8]}
                    </div>
                </div>
                <div className='bot4'>
                    <div className='b4MultTotal'>
                        {this.props.totals[9]}
                    </div>
                    <div className='b4Pic'>
                        <img className='voltorb' src={process.env.PUBLIC_URL + '/voltorb.png'} alt="voltorb"/>
                    </div>
                    <div className='b4Voltorbs'>
                        {this.props.numZeros[9]}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom;