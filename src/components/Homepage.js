import React from "react";
import '../styles/Homepage.css';
import Game from "./Game";

class Homepage extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="homepage-container">
                <Game/>
            </div>
        )
    }

}

export default Homepage;