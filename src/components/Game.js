import React from 'react';
import '../styles/Game.css';
import Board from './Board';
import RightSide from './RightSide';
import Bottom from './Bottom';
import LeftSide from './LeftSide';
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lvl : 0,
            id: [],
            boardVals : [],
            numZeros: [],
            totals: [],
            score: 1,
            tileBools: []
        }
        this.createBoardValues = this.createBoardValues.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.changeBool = this.changeBool.bind(this);
    }

    createBoardValues() {
        const nextLvl = this.state.lvl + 1;
        var ids = [];
        var newVals = [];
        var i, j;
        const max = 25;
        for (i = 0; i < max; i++) {
            ids[i] = i;
            newVals[i] = 1;
        }
        var level = "";
        switch (nextLvl) {
            case 1: /* lvl1 test case */
                // var localData = require('../data/boardValues.json')
                // var twos = localData["levelOne"][0]
                // var threes = localData["levelOne"][1]
                // var zeros = localData["levelOne"][2]
                // var used = [];
                // var curr = 0;
                // for (i = 0; i < zeros; i++){
                //     curr = Math.floor(Math.random() * Math.floor(max));
                //     while (used.includes(curr)){
                //         curr = Math.floor(Math.random() * Math.floor(max));
                //     }
                //     used.push(curr);
                //     newVals[curr] = 0;
                // }
                // for (i = 0; i < threes; i++){
                //     curr = Math.floor(Math.random() * Math.floor(max));
                //     while (used.includes(curr)){
                //         curr = Math.floor(Math.random() * Math.floor(max));
                //     }
                //     used.push(curr);
                //     newVals[curr] = 3;
                // }
                // for (i = 0; i < twos; i++){
                //     curr = Math.floor(Math.random() * Math.floor(max));
                //     while (used.includes(curr)){
                //         curr = Math.floor(Math.random() * Math.floor(max));
                //     }
                //     used.push(curr);
                //     newVals[curr] = 2;
                // }
                // console.log(newVals);
                // console.log(ids);
                level = "levelOne";
                break;
            case 2:
                level = "levelTwo";
                break;
            case 3:
                level = "levelThree";
                break;
            case 4:
                level = "levelThree";
                break;
            case 5:
                level = "levelFour";
                break;
            case 6:
                level = "levelSix";
                break;
            case 7:
                level = "levelSeven";
                break;
            case 8:
                level = "levelEight";
                break;
                
            default:
                console.log('default')
        }
        if (level !== ""){
            var localData = require('../data/boardValues.json')
            var twos = localData[level][0]
            var threes = localData[level][1]
            var zeros = localData[level][2]
            var used = [];
            var curr = 0;
            for (i = 0; i < zeros; i++){
                curr = Math.floor(Math.random() * Math.floor(max));
                while (used.includes(curr)){
                    curr = Math.floor(Math.random() * Math.floor(max));
                }
                used.push(curr);
                newVals[curr] = 0;
            }
            for (i = 0; i < threes; i++){
                curr = Math.floor(Math.random() * Math.floor(max));
                while (used.includes(curr)){
                    curr = Math.floor(Math.random() * Math.floor(max));
                }
                used.push(curr);
                newVals[curr] = 3;
            }
            for (i = 0; i < twos; i++){
                curr = Math.floor(Math.random() * Math.floor(max));
                while (used.includes(curr)){
                    curr = Math.floor(Math.random() * Math.floor(max));
                }
                used.push(curr);
                newVals[curr] = 2;
            }
            
            var currZeros = 0;
            var newZeros = [];
            var totals = [];
            var currTotals = 0;
            for (i = 0; i < 5; i++){
                for (j = 0; j < 5; j++){
                    if (newVals[((5*i)+j)] === 0){
                        currZeros += 1;
                    }
                    else {
                        currTotals += newVals[((5*i)+j)];
                    }
                }
                newZeros.push(currZeros);
                currZeros = 0;
                totals.push(currTotals)
                currTotals = 0;
            }
            for (i = 0; i < 5; i++){
                for (j = 0; j < 5; j++){
                    if(newVals[(5*j)+i] === 0){
                        currZeros += 1;
                    }
                    else {
                        currTotals += newVals[((5*j)+i)];
                    }
                }
                newZeros.push(currZeros);
                currZeros = 0;
                totals.push(currTotals);
                currTotals = 0;
            }
            // console.log(newZeros);
            // console.log(totals);
            var bools = [];
            for (i = 0; i < 25; i++) {
                bools.push(true);
            }
                this.setState((state) => {
                    return {
                        lvl: nextLvl,
                        id: ids,
                        boardVals: newVals,
                        numZeros: newZeros,
                        totals: totals,
                        tileBools: bools
                    }
                    
                })
        }
        else {

        }
        
    }

    updateScore(val) {
        const newScore = this.state.score * val;
        this.setState({
            score : newScore
        })
    }

    componentDidMount() {
        this.createBoardValues();
    }

    changeBool(val) {
        var newBools = this.state.tileBools;
        newBools[val] = false;
        this.setState({
            tileBools: newBools
        })
    }

    render(){
        return(
            <div className="game-container">
                <h1 className="top">
                    Voltorb Flip
                </h1>
                <div className="middle">
                    <Board ids={this.state.id} vals={this.state.boardVals} updateScore={this.updateScore} totals={this.state.totals} numZeros={this.state.numZeros} tileBools={this.state.tileBools} changeBool={this.changeBool}/>
                </div>
                <div className="leftSide">
                    <button onClick={this.createBoardValues}>newBoard</button>
                    <LeftSide score={this.state.score} lvl={this.state.lvl}/>
                </div>
                <div className="rightSide">
                    <RightSide totals={this.state.totals} numZeros={this.state.numZeros}/>
                </div>
                <div className="bottom">
                    <Bottom totals={this.state.totals} numZeros={this.state.numZeros}/>
                </div>
            </div>
        )
    }
}

export default Game;